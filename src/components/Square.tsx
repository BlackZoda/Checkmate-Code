interface squareProps {
    file: number;
    row: number;
}

const Square : React.FC<squareProps> = ({file, row}) => {

    const fileLetters : Array<string> = 
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const rowNumbers : Array<string> =
        ['1', '2', '3', '4', '5', '6', '7', '8'];

    const name : string = fileLetters[file-1] +
        rowNumbers.reverse()[row-1];

    let color : string;

    if (file % 2 === 0 && row % 2 !== 0 ||
        file % 2 !== 0 && row % 2 === 0) {
        color = "bg-dark text-light";
    } else {
        color = "bg-light text-dark";
    }

	return (
		<div className={`${color} h-full w-full flex
                flex-col place-content-center`}>
            <p className="sm:font-bold text-xs sm:text-base
                    lg:text-xl xl:text-2xl">{name}</p>
        </div>
	)
}

export default Square;
