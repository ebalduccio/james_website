'use client';

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
          const { data } = await axios.post('/api/auth', { username, password });
          localStorage.setItem('token', data.token); // Armazenar o token no localStorage
          login(data.token);
          router.push('/dashboard');
        } catch (error) {
          alert('Invalid credentials');
        }
      };

    return (
        <section className="h-[60rem] bg-whitebg bg-cover bg-center bg-no-repeat">
            <MaxWidthWrapper>
                <SectionTitle TextColor="black" VectorColor="Black" title="James A. Kostohryz" subtitle="Authentication" />
                <div className="flex flex-col items-center mt-20">
                    <div className="w-[20rem] h-[17rem] relative bg-neutral-500 rounded-3xl">
                        <div className="flex flex-col gap-5 h-full items-center justify-center">
                            <input
                                type="text"
                                className="h-10 w-[16rem] pl-2 rounded-md"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                className="h-10 w-[16rem] pl-2 rounded-md"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant={"sucess"} className="px-16" onClick={handleLogin}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default LoginPage;
