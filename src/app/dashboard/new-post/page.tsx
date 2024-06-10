import NewPostForm from "./components/NewPostForm";

export default async function NewPost() {
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-lg md:text-2xl">New post</h1>
          <NewPostForm />
        </div>
      </main>
    );
  }
  