import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
// import { Eye } from "lucide-react";

// const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
    const featured = allProjects.find((project) => project.slug === "unkey")!;
    const top2 = allProjects.find((project) => project.slug === "planetfall")!;
    const top3 = allProjects.find((project) => project.slug === "highstorm")!;
    const sorted = allProjects
        .filter((p) => p.published)
        .filter(
            (project) =>
                project.slug !== featured.slug &&
                project.slug !== top2.slug &&
                project.slug !== top3.slug,
        )
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
        );

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Some of the projects are from work and some are on my own time.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <article className="relative w-full h-full p-8">
                            <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">Telzee.io</p>
                            <h2
                                id="featured-post"
                                className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                            >
                                Banty.com
                            </h2>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                {featured.description}
                            </p>
                        </article>
                    </Card>

                    <Card>
                        <article className="relative w-full h-full p-8">
                            <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">Telzee.io</p>
                            <h2
                                id="featured-post"
                                className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                            >
                                Docswell.co
                            </h2>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                {featured.description}
                            </p>
                        </article>
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        <Card>
                            <article className="relative w-full p-8">
                                <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">Telzee.io</p>
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    Livepin
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>

                        <Card>
                            <article className="relative w-full p-8">
                                <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">Telzee.io</p>
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    CyberHorizon
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                    </div>

                    <Card>
                        <article className="relative w-full h-full p-8">
                            <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">Telzee.io</p>
                            <h2
                                id="featured-post"
                                className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                            >
                                Easly
                            </h2>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                {featured.description}
                            </p>
                        </article>
                    </Card>

                    <Card>
                        <article className="relative w-full h-full p-8">
                            <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">OrangeHRM</p>
                            <h2
                                id="featured-post"
                                className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                            >
                                OrangeHRM Enterprise Mobile
                            </h2>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                {featured.description}
                            </p>
                        </article>
                    </Card>

                    <Card>
                        <article className="relative w-full h-full p-8">
                            <p className="text-xs duration-1000 text-zinc-200 group-hover:text-white">OrangeHRM</p>
                            <h2
                                id="featured-post"
                                className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                            >
                                OrangeHRM Enterprise
                            </h2>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                {featured.description}
                            </p>
                        </article>
                    </Card>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    kuliyata.lk
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    Mercon 2015
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    effective-solutions.org
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    Manipulation Detection in Stock Trading
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    Siplo.lk
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    Print House Management System
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                        <Card>
                            <article className="relative w-full h-full p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-1 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
                                >
                                    aradhanahotel.lk
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
