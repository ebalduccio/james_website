import Link from "next/link";
import SocialMediaPost from "../personalblog/components/PBPost";

export default function SocialMediaPage() {
    return (
        <>
            <div className="h-full">
                <div className="grid grid-cols-1 gap-4 justify-center py-4 px-2">
                            <SocialMediaPost
                                title={'post.title'}
                                timestamp={'post.createdAt'}
                                content={'post.content'}
                            />
                </div>
            </div>
        </>
    )
}