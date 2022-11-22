import React from 'react';
import Button from "../../components/Button"
import userCheck from '../../assets/user-check.png';
import code from '../../assets/code.png';
import headsetMic from '../../assets/headset-mic.png';
import dollarCoin from '../../assets/dollarCoin.png';
import clock from '../../assets/alarm.png';
import earth from '../../assets/earth.png';
import suitcase from '../../assets/suitcase.png';
import gift from '../../assets/Gift.png';
import send from '../../assets/send.png';
import briefCase from '../../assets/Suitcase 1.png';
import location from '../../assets/location.png';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const Careers = () => {
	const teams = [
		{
			name: 'Product',
			logo: userCheck,
		},
		{
			name: 'Engineering',
			logo: code,
		},
		{
			name: 'Marketing',
			logo: headsetMic,
		},
		{
			name: 'Finance',
			logo: dollarCoin,
		},
	];

	const openings = [
		{
			short: 'AM',
			title: 'ACCOUNT MANAGER',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			short: 'A',
			title: 'ACCOUNT',
			type: 'Part-Time',
			location: 'Remote',
		},
		{
			short: 'PD',
			title: 'PRODUCT DESIGNER',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			short: 'DO',
			title: 'DEVOPS',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			short: 'FD',
			title: 'FRONT-END DEVELOPER',
			type: 'Full-time',
			location: 'Lagos',
		},
		{
			short: 'FM',
			title: 'FINANCE MANAGER',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			short: 'MS',
			title: 'MARKETING SPECIALIST',
			type: 'Full-time',
			location: 'Remote',
		},
		{
			short: 'HA',
			title: 'HEAD ACCOUNTANT ',
			type: 'Full-time',
			location: 'Lagos',
		},
		{
			short: 'AM',
			title: 'ACCOUNT MANAGER',
			type: 'Full-time',
			location: 'Lagos',
		},
		{
			short: 'DA',
			title: 'DATA ANALIST',
			type: 'Part-time',
			location: 'Remote',
		},
		{
			short: 'PD',
			title: 'PRODUCT DESIGNER',
			type: 'Internship',
			location: 'Remote',
		},
		{
			short: 'SE',
			title: 'SALES EXECUTIVE',
			type: 'Full-time',
			location: 'Remote',
		},
	];

	return (
		<>
			<NavigationBar />
			<div>
				<div className="text-center bg-hero bg-cover bg-no-repeat h-[460px] md:h-[600px] bg-center">
					<div className="relative bg-black bottom-0 bg-opacity-60 h-full w-full">
						<h1 className="relative text-6xl text-white top-1/2 mx-auto">
							CAREERS
						</h1>
					</div>
				</div>
				<div>
					<div className="mx-16 py-8 md:mx-auto md:px-10">
						<h1 className="text-center text-4xl md:text-4xl lg:text-8xl font-bold text-[#1849A9] font-normal">
							JOIN US
						</h1>
						<p className="text-center text-xl sm:text-2xl leading-[25px] md:text-2xl w-50">
							Want to join an exciting work environment operating at the
							forefront of AI technology development for accounting software?
						</p>
					</div>
				</div>

				<div className="w-full px-6 sm:px-12 pt-10 bg-gray-100">
					<h1 className="text-center text-4xl bg-gray-100 pt-4 pb-7 mx-auto lg:text-8xl md:text-5xl font-normal lg:pt-12 md:pt-8 sm:pt-6 text-[#1849A9] leading-6">
						OUR TEAMS
					</h1>
					<div className="bg-gray-100 pt-2 grid grid-cols-2 lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2">
						{teams.map((team) => (
							<div className="flex flex-col my-4 md:max-w-7xl sm:w-full">
								<h2 className="text-center text-2xl text-[#101828] md:text-3xl leading-[60px]">
									{team.name}
								</h2>

								<img
									src={team.logo}
									alt="team_logo"
									className="text-center w-20 md:w-[100px] self-center"
								/>
							</div>
						))}
					</div>
					<div className="px-5 bg-gray-100 text-center py-4">
						<p className="text-center mx-auto text-xl sm:text-2xl md:text-3xl font-normal pb-6 max-w-7xl">
							We are a global company with root spread worldwide, and our team
							reflects that. The Account Pal team is building the future of AI
							technology to help improve efficiency and boost productivity.
						</p>
					</div>
				</div>

				<div className="py-6 pt-2">
					<h1 className="text-4xl font-normal md:text-5xl lg:text-8xl text-center text-[#1849A9] mx-auto">
						BENEFITS
					</h1>
					<div className="md:flex md:flex-col lg:pl-60 pt-2 md:pl-30 pl-10">
						<span className="inline-flex items-center mt-1">
							<img src={clock} alt="clock" className="self-center m-2 w-12" />{' '}
							<span className="text-base sm:text-xl md:text-3xl text-[#101828]">
								Flexi-time and remote working
							</span>
						</span>
						<span className="inline-flex items-center mt-1">
							<img src={earth} alt="earth" className="self-center m-2 w-12" />{' '}
							<span className="text-base sm:text-xl md:text-3xl text-[#101828]">
								Opportunity to be part of a world-class team
							</span>
						</span>
						<span className="inline-flex items-center mt-1">
							<img
								src={suitcase}
								alt="suitcase"
								className="self-center m-2 w-12"
							/>{' '}
							<span className="text-base sm:text-xl md:text-3xl text-[#101828]">
								Fantastic work culture
							</span>
						</span>
						<span className="inline-flex items-center mt-1">
							<img src={gift} alt="gift" className="self-center m-2 w-12" />{' '}
							<span className="text-base sm:text-xl md:text-3xl text-[#101828] " >
								Competitive compensation package and benefits
							</span>
						</span>
					</div>
				</div>

				<div className="bg-gray-100 px-4 py-4">
					<h1 className="lg:text-8xl mx-2 md:text-5xl text-4xl text-[#1849A9] text-center">
						CURRENT OPENINGS
					</h1>
					<div className="px-1 sm:px-10 md:px-6 pt-14 grid md:grid-cols-2 xl:p-14">
						{openings.map((opening) => (
							<div className="flex flex-row mx-2 mt-2 gap-4 md:p-1 md:mx-0 md:gap-1">
								<div className="basis-1/6 text-base md:m-1 md:text-xl md:pb-2 border-4 border-solid pt-1 h-10 w-18 align-middle text-center border-sky-600 rounded-full">
									{opening.short}
								</div>
								<div className="basis-3/4">
									<h3 className="items-start text-base sm:text-xl md:text-base md:ml-1 sm:mb-2 font-normal">
										{opening.title}
									</h3>
									<div className="grid grid-cols-2">
										<div className="flex align-middle">
											<img
												src={briefCase}
												alt="case"
												className="mt-1 w-5 h-5 sm:h-6 sm:w-6 md:h-6 md:w-6"
											/>
											<span className="text-sm sm:text-base md:text-sm pt-1 pl-2">
												{opening.type}
											</span>
										</div>
										<div className="flex align-center">
											<img
												src={location}
												alt="location"
												className="ml-2 mt-1 h-5 w-5 sm:w-6 sm:h-6 md:h-6 md:w-6"
											/>
											<span className="text-sm sm:text-base md:text-sm pt-1 pl-2">
												{opening.location}
											</span>
										</div>
									</div>
								</div>
								<div className="basis-1/5 md:basis-1/5">
									<img src={send} alt="send" className="w-10" />
								</div>
							</div>
						))}
					</div>
					<div className="text-center mx-2 my-4 py-2 border border-solid border-slate-900">
						<h1 className="font-semibold text-base sm:text-3xl md:text-4xl">
							Join Our Newsletter
						</h1>
					</div>
					<div className="flex flex-row mx-auto md:mb-7 max-w-[300px] sm:max-w-[600px] items-center self-center">
						<input
							type="email"
							className="text-center text-base md:text-xl w-full mx-1 sm:mx-2 px-8 md:px-10 py-1 sm:py-2 border border-solid border-slate-900"
							placeholder="Enter email"
						/>
						<Button path="#" title="Subscribe" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Careers;
