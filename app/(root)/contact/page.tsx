import React from 'react';

const Contact = () => {
	return (
		<section className='w-full h-auto flex flex-col lg:flex-row items-center justify-center bg-white px-44 py-'>
			{/* Left Side - Image */}
			<div className='lg:w-1/2 w-full h-full lg:rounded-l-2xl rounded-2xl overflow-hidden'>
				<img
					src='https://pagedone.io/asset/uploads/1696488602.png'
					alt='Contact Us Section Image'
					className='w-full h-full bg-blend-multiply bg-indigo-700'
				/>
			</div>

			{/* Right Side - Form */}
			<div className='lg:w-1/2 w-full flex flex-col p-8 bg-gray-50 lg:rounded-r-2xl rounded-2xl shadow-lg'>
				<h2 className='text-3xl font-semibold text-gray-800 mb-4'>
					Contact Us
				</h2>
				<form className='flex flex-col space-y-4'>
					{/* Name Input */}
					<div className='flex flex-col'>
						<label htmlFor='name' className='text-base text-gray-600 mb-2'>
							Your Name
						</label>
						<input
							id='name'
							type='text'
							placeholder='Enter your name'
							className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							required
						/>
					</div>

					{/* Email Input */}
					<div className='flex flex-col'>
						<label htmlFor='email' className='text-base text-gray-600 mb-2'>
							Your Email
						</label>
						<input
							id='email'
							type='email'
							placeholder='Enter your email'
							className='border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							required
						/>
					</div>

					{/* Radio Buttons */}
					<div className='flex items-center space-x-4'>
						<label
							htmlFor='radio-group-1'
							className='flex items-center cursor-pointer text-gray-500'
						>
							<span className='border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center mr-2'>
								<input
									id='radio-group-1'
									type='radio'
									name='radio-group'
									className='hidden'
									required
								/>
							</span>
							Option 1
						</label>

						<label
							htmlFor='radio-group-2'
							className='flex items-center cursor-pointer text-gray-500'
						>
							<span className='border border-gray-300 rounded-full w-4 h-4 flex items-center justify-center mr-2'>
								<input
									id='radio-group-2'
									type='radio'
									name='radio-group'
									className='hidden'
									required
								/>
							</span>
							Option 2
						</label>
					</div>

					{/* Submit Button */}
					<button
						type='submit'
						className='w-full h-12 bg-indigo-600 text-white text-base font-semibold rounded-full hover:bg-indigo-800 transition-all duration-300'
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
