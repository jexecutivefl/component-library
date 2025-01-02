type BlogPageProps = {
    params: any
}

export default function BlogPage({params}: BlogPageProps) {
    return (
        <>
            <h1>Blog Page</h1>
            <p>{params.slug}</p>
        </>
    )
}