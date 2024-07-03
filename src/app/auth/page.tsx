'use client';

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

const AuthPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleLogin = () => {
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            localStorage.setItem("auth", "true");
            router.push("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            <section className="h-[60rem] bg-whitebg bg-cover bg-center bg-no-repeat">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="black" VectorColor="Black" title="James A. Kostohryz" subtitle="Authentication" />
                    <div className="flex flex-col items-center mt-20">
                        <div className="w-[30rem] sm:w-[40rem] h-[26rem] relative bg-stone-500 rounded-3xl">
                            <div className="flex flex-col gap-5 h-full items-center justify-center">
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="text"
                                        className="h-10 w-[16rem] pl-2 rounded-md"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="password"
                                        className="h-10 w-[16rem] pl-2 rounded-md"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="pt-10">
                                    <Button variant={"sucess"} className="px-16" onClick={handleLogin}>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
};

export default AuthPage;

