import { useState } from "react";
import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import TitleCard from "./TitleCard";
const Wrapper = styled.div`
	margin-top: 2rem;
	padding: 1rem;
`;

const Pricingtable = ({ data }) => {
	const [active, setActive] = useState(1);

	return (
		<Wrapper>
			{data[0].map((item, i) => (
				<HeaderItem
					key={i}
					item={item}
					setActive={setActive}
					active={active}
					index={i}
				/>
			))}
			<TitleCard data={data.slice(1)} />
		</Wrapper>
	);
};
export default Pricingtable;
