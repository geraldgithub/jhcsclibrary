import { useState, useEffect } from "react";import axios from "axios";import { Carousel } from "flowbite-react";import logo from "../../../assets/img/logo.png";function Libraries() {	const [librarians, setLibrarians] = useState([]);	const [mainCampus, setMainCampus] = useState([]);	const [dumingagCampus, setDumingagCampus] = useState([]);	const [pagadianCampus, setPagadianCampus] = useState([]);	const [canutoCampus, setCanutoCampus] = useState([]);	useEffect(() => {		const fetchLibrarians = async () => {			try {
				//all librarians head
				const response = await axios.get("https://libraryapi.pythonanywhere.com/api/librarians/");
				setLibrarians(response.data);

				//main campus librarians
				const mainCampusResponse = await axios.get("https://libraryapi.pythonanywhere.com/api/main/");
				setMainCampus(mainCampusResponse.data);

				//dumingag campus librarians
				const dumingagCampusResponse = await axios.get("https://libraryapi.pythonanywhere.com/api/dumingag/");
				setDumingagCampus(dumingagCampusResponse.data);

				//pagadian campus librarians
				const pagadianCampusResponse = await axios.get("https://libraryapi.pythonanywhere.com/api/pagadian/");
				setPagadianCampus(pagadianCampusResponse.data);

				//canuto campus librarians
				const canutoCampusResponse = await axios.get("https://libraryapi.pythonanywhere.com/api/canuto/");
				setCanutoCampus(canutoCampusResponse.data);
			} catch (error) {
				console.error("Error fetching librarians:", error);
			}
		};

		fetchLibrarians();
	}, []);
	return (
		<>
			<div className="bg-white py-4 lg:py-24 w-full">
				<div className="mx-4 lg:mx-32">
					<div className="flex items-center">
						<p className="text-gray-400 font-semibold text-sm tracking-wide">LIBRARIES</p>
						<p className="text-yellow-300 ml-2 mb-4">__________________</p>
					</div>
					<p className="font-bold text-4xl">JHCSC LIBRARIES</p>
				</div>

				<div className="flex flex-row flex-wrap justify-evenly mt-8">
					{librarians
						.filter((list) => list.is_librarian_head)
						.map(({ id, name, site, email, facebook_link }) => {
							return (
								<div
									className="flex flex-col my-8"
									key={id}>
									<img
										src={logo}
										alt=""
										className="w-24 h-24"
										draggable="false"
									/>
									<p className="my-4 font-semibold text-lg">{site} Campus</p>
									<ol className="list-disc ml-12">
										<li>{name}</li>
										<li className="font-bold">
											<a
												href={`mailto:${email}?subject=Hello&body=Hello%20there,`}
												className="text-green-600">
												{email}
											</a>
										</li>
										<li>
											<a
												href={facebook_link}
												target="_blank"
												className="font-bold text-green-600">
												Facebook Page
											</a>
										</li>
									</ol>
								</div>
							);
						})}
				</div>
			</div>
			<div className="bg-black/50 lg:p-4 text-white">
				<div className="h-screen sm:h-[640px] md:h-[710px] xl:h-[600px] 2xl:h-[600px]">
					<Carousel>
						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-24 font-semibold text-xl sm:text-4xl mt-4">Main Library</p>
							{mainCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col justify-center items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24 rounded-full"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-center mt-8 flex-wrap">
								{mainCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position, user_image }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={user_image}
												className="w-4 h-24 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-12 font-semibold text-xl sm:text-4xl">Dumingag Library</p>
							{dumingagCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24 rounded-full"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-between mt-8 flex-wrap">
								{dumingagCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position, user_image }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={user_image}
												className="w-4 h-24 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-12 font-semibold text-xl sm:text-4xl">Pagadian Library</p>
							{pagadianCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position, user_image }) => (
									<div
										className="flex flex-col items-center"
										key={id}>
										<img
											src={user_image}
											className="w-12 sm:w-24 rounded-full"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-between mt-8 flex-wrap">
								{pagadianCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={logo}
												className="w-12 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>

						<div className="flex flex-col justify-center items-center">
							<p className="text-center text-yellow-400 mb-12 font-semibold text-xl sm:text-4xl">
								Canuto MS Enerio Library
							</p>
							{canutoCampus
								.filter((list) => list.is_librarian_head)
								.map(({ id, name, position }) => (
									<div
										className="flex flex-col items-center"
										key={id}>
										<img
											src={logo}
											className="w-12 sm:w-24"
											alt=""
										/>
										<p className="text-lg font-bold">{name}</p>
										<p>{position}</p>
									</div>
								))}
							<div className="flex flex-col md:flex-row justify-between mt-8 flex-wrap">
								{canutoCampus
									.filter((list) => !list.is_librarian_head)
									.map(({ id, name, position }) => (
										<div
											className="flex flex-col items-center mx-12 my-2"
											key={id}>
											<img
												src={logo}
												className="w-12 sm:w-24 rounded-full"
												alt=""
											/>
											<p className="text-sm sm:text-lg font-bold">{name}</p>
											<p className="text-xs sm:text-md">{position}</p>
										</div>
									))}
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</>
	);
}

export default Libraries;
