const Row = ({ rowData }) => {
	const { title, competitor, tolobi } = rowData;
	return (
		<tr>
			<td>{title}</td>

			{typeof competitor !== "object" ? (
				<td>{competitor}</td>
			) : (
				<td>
					<p>{competitor?.percentage}</p>
					<p>{competitor?.condition}</p>
				</td>
			)}
			{typeof tolobi !== "object" ? (
				<td>{competitor}</td>
			) : (
				<td>
					<p>{tolobi?.percentage}</p>
					<p>{tolobi?.condition}</p>
				</td>
			)}
		</tr>
	);
};

export default Row;
