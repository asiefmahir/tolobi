const Row = ({ rowData }) => {
	const { title, competitor, tolobi } = rowData;
	return (
		<tr className="tr">
			<td className="table-row-item">{title}</td>

			{typeof competitor !== "object" ? (
				
				<td className="table-row-item"><h2>{competitor}</h2></td>
			) : (
				<td className="table-row-item">
					<h2>{competitor?.percentage}</h2>
					<p>{competitor?.condition}</p>
				</td>
			)}
			{typeof tolobi !== "object" ? (
				<td className="table-row-item"><h2>{competitor}</h2></td>
			) : (
				<td className="table-row-item">
					<h2>{tolobi?.percentage}</h2>
					<p>{tolobi?.condition}</p>
				</td>
			)}
		</tr>
	);
};

export default Row;
