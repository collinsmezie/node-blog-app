import React from "react";
import image from "../images/tranxact.jpg";
import { Link } from "react-router-dom";

const Home = () => {
	const posts = [
		{
			id: 1,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			img: image
		},

		{
			id: 1,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			img: image
		},

		{
			id: 1,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			img: image
		},

		{
			id: 1,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis accusantium dolores enim quibusdam non debitis expedita, reprehenderit odit numquam, eos cumque temporibus repellendus itaque hic molestias earum ratione deleniti incidunt.",
			img: image
		}
	]
  return(
		<div className="home">
			<div className="posts">
				{posts.map(post => (
					<div className="post" key={post.id}>
						<div className="img">
							<img src={post.img} alt="post images"/>
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<button>Read More</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)}

	export default Home;