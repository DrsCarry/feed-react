import Feed from "../components/Feed";

export default function MostViewed () {
    const post = [];

return (
<main className="most-viewed">
<Feed 
posts={post}
title="Mais Vistos"
subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
/>
</main> 
);
}