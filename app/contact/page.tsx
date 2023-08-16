"use client";
import { Github, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function ContactPage() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-2 gap-8 mx-auto mt-32">
                    <Card>
                        <Link
                            href={'mailto:buddhi.vikasitha@gmail.com'}
                            target="_blank"
                            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 py-10"
                        >
                            <span
                                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                aria-hidden="true"
                            />
                            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                <Mail size={20} />
                            </span>{" "}
                            <div className="z-10 flex flex-col items-center">
                                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    {'buddhi.vikasitha@gmail.com'}
                                </span>
                                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                    {'Email'}
                                </span>
                            </div>
                        </Link>
                    </Card>

                    <Card>
                        <Link
                            href={'https://github.com/buddhiv'}
                            target="_blank"
                            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 py-10"
                        >
                            <span
                                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                aria-hidden="true"
                            />
                            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                <Github size={20} />
                            </span>{" "}
                            <div className="z-10 flex flex-col items-center">
                                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    {'@buddhiv'}
                                </span>
                                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                    {'Github'}
                                </span>
                            </div>
                        </Link>
                    </Card>

                    <div className="flex flex-col col-span-2">
                        <Card>
                            <Link
                                href={'https://medium.com/@buddhiv'}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 py-10"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    <Globe size={20} />
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {'buddhiv.medium.com'}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'Blog'}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
