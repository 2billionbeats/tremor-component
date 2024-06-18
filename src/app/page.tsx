import { DataBar } from '@/components/DataBar/DataBar';

export default function Home({}) {
	return (
		<>
			<div className="w-1/2 flex flex-col space-y-10">
				<h1 className="text-white text-lg">有上下限</h1>
				<DataBar cursor={150} lowerLimit={70} upperLimit={180} />

				<DataBar cursor={7.46} lowerLimit={7.35} upperLimit={7.45} mode="magnify" />

				<h1 className="text-white text-lg">只有下限</h1>
				<DataBar cursor={17.9} lowerLimit={17} />

				<h1 className="text-white text-lg">只有上限</h1>
				<DataBar cursor={17.9} upperLimit={17} />
			</div>
		</>
	);
}
