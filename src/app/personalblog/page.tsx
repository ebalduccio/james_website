import PBPost from "./components/PBPost";

export default function PersonalBlog() {
    return (
        <>
            <div className="h-full">
                <div className="grid grid-cols-1 h-full gap-4 items-center justify-center py-4 px-2">
                    <PBPost />
                    <PBPost />
                    <PBPost />
                    <PBPost />
                    <PBPost />
                    <PBPost />
                    <PBPost />
                    <PBPost />
                    <PBPost />
                </div>
            </div>
        </>
    )
}