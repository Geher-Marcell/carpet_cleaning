import React from "react";
import BaseWidget from "../baseWidget";
import DynamicFAIcon from "../utils/DynamicIcon";
import WhyUsData from "../utils/whyus";

export default function WhyUsModule() {
	return (
		<div className="flex justify-center flex-col items-center **:text-center p-10">
			<div className="flex flex-wrap gap-5 justify-center">
				{WhyUsData.map((item, index) => (
					<React.Fragment key={index}>
						<BaseWidget
							className="w-40 h-40 rounded-xl p-5 flex items-center justify-center flex-col"
							content={
								<>
									<div className="bg-primary/20 w-10 h-10 flex justify-center items-center rounded-4xl">
										<DynamicFAIcon
											exportName={item.icon}
											className="text-primary"
										/>
									</div>
									<p className="font-medium m-4.5">{item.title}</p>
								</>
							}
						/>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
