'use client';

import React, { useState, useCallback, useMemo, useEffect, ReactNode, HTMLAttributes, forwardRef, RefObject } from 'react';
import { Editable, withReact, useSlate, Slate } from 'slate-react';
import { Editor, Transforms, createEditor, Descendant, Element as SlateElement, Text, BaseText } from 'slate';
import { withHistory } from 'slate-history';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import isHotkey from 'is-hotkey';

import { postSchema, PostSchema } from '../../../schemas/postSchema';
import { createPost } from '@/lib/api';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Terminal, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faCode, faQuoteRight, faListOl, faListUl, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faHeading } from '@fortawesome/free-solid-svg-icons';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

interface CustomElement extends SlateElement {
  type: string;
  align?: string;
}

type CustomText = BaseText & {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
};

type CustomEditor = {
  type: 'paragraph' | 'block-quote' | 'bulleted-list' | 'heading-one' | 'heading-two' | 'list-item' | 'numbered-list';
  align?: 'left' | 'center' | 'right' | 'justify';
  children: CustomText[];
};

const NewPostForm: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
  });

  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [content, setContent] = useState<Descendant[]>(initialValue);
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorAlert, setErrorAlert] = useState<string | null>(null);

  useEffect(() => {
    register('content');
  }, [register]);

  useEffect(() => {
    setValue('content', JSON.stringify(content));
  }, [content, setValue]);

  const onSubmit = async (data: PostSchema) => {
    try {
      await createPost({ ...data, content: JSON.stringify(content) });
      setAlertVisible(true);
      setErrorAlert(null); // Reset error alert on success
    } catch (error) {
      console.error('Error creating post:', error);
      setErrorAlert('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-10 pt-10">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Title" {...register('title')} />
          {errors.title && <p className='text-red-700 text-ms pl-2 font-semibold'>{errors.title.message}</p>}
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="content">Text</Label>
          <Slate editor={editor} initialValue={content} onChange={newValue => setContent(newValue)}>
            <div className='relative py-[1px] px-[18px] pb-[17px] m-0 -mx-[20px] border-b-2 border-b-[#eee] mb-[20px]'>
              <div className='flex items-center gap-4'>
                <MarkButton format="bold" icon={faBold} />
                <MarkButton format="italic" icon={faItalic} />
                <MarkButton format="underline" icon={faUnderline} />
                <MarkButton format="code" icon={faCode} />
                <BlockButton format="heading-one" icon={faHeading} />
                <BlockButton format="heading-two" icon={faHeading} />
                <BlockButton format="block-quote" icon={faQuoteRight} />
                <BlockButton format="numbered-list" icon={faListOl} />
                <BlockButton format="bulleted-list" icon={faListUl} />
                <BlockButton format="left" icon={faAlignLeft} />
                <BlockButton format="center" icon={faAlignCenter} />
                <BlockButton format="right" icon={faAlignRight} />
                <BlockButton format="justify" icon={faAlignJustify} />
              </div>
            </div>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder="Enter some rich text…"
              spellCheck
              autoFocus
              className='w-[45rem] h-[20rem] border border-gray-300 p-2'
              onKeyDown={event => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const mark = (HOTKEYS as any)[hotkey];
                    toggleMark(editor, mark);
                  }
                }
              }}
            />
          </Slate>
          {errors.content && <p className='text-red-700 text-ms pl-2 font-semibold'>{errors.content.message}</p>}
          <Button className='mt-[4rem]'>Publish</Button>
        </div>
      </div>
      <div className='pt-5'>
        {alertVisible && (
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Done!</AlertTitle>
            <AlertDescription>
              Post successfully created!
            </AlertDescription>
          </Alert>
        )}
        {errorAlert && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              {errorAlert}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </form>
  );
};

const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type');
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes((n as CustomElement).type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<CustomElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
  }
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor: Editor, format: string, blockType = 'type') => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n as any)[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor);
  return marks ? (marks as any)[format] === true : false;
};

const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

type Propsb = {
  active: boolean;
  reversed?: boolean;
  children?: ReactNode;
  icon: any;
} & HTMLAttributes<HTMLSpanElement>;

const ToolsButton = forwardRef<HTMLSpanElement, Propsb>(
  ({ className, active, reversed, icon, ...props }, ref) => {
    const spanRef = ref as RefObject<HTMLSpanElement>;

    return (
      <span
        {...props}
        ref={spanRef}
        className={cn(
          className,
          'cursor-pointer',
          reversed
            ? active
              ? 'text-white'
              : 'text-gray-300'
            : active
              ? 'text-black'
              : 'text-gray-400'
        )}
      >
        <FontAwesomeIcon icon={icon} />
      </span>
    );
  }
);

ToolsButton.displayName = 'ToolsButton';

const BlockButton = ({ format, icon }: any) => {
  const editor = useSlate();
  return (
    <ToolsButton
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      icon={icon}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    />
  );
};

const MarkButton = ({ format, icon }: any) => {
  const editor = useSlate();
  return (
    <ToolsButton
      active={isMarkActive(editor, format)}
      icon={icon}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    />
  );
};

const initialValue: CustomEditor[] = [
  {
    type: 'paragraph',
    children: [
      { text: '' },
    ],
  },
];

export default NewPostForm;
