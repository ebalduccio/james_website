import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Publication from "@/components/Publication";
import PublicationPersonal from "@/components/PublicationPersonal";
import SectionTitle from "@/components/SectionTitle";

export default function PersonalBlogPage() {
    return (
        <>
            <section className="h-[25rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <div className=" py-32 mx-auto flex items-center justify-center">
                        <h1 className="text-8xl font-lora text-center">Personal Blog</h1>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[100rem] bg-blackbg bg-center bg-cover bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Welcome To JK Personal Blog" />
                    <div className="flex flex-col items-center mt-10">
                        <div className="w-[32rem] sm:w-[42rem] lg:w-[50rem] h-[78rem] rounded-md bg-white">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-stone-500 rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center text-white font-roboto text-xs max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center">
                                <PublicationPersonal />
                                <PublicationPersonal />
                                <PublicationPersonal />
                                <PublicationPersonal />
                                <PublicationPersonal />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}