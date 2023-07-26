

const BeltDropdown = (props) => {
    const { setterFn, selected } = props

    const handleBeltChange = (e) => {
        const { name, value } = e.target;
        setterFn((prevState) => {
        return {
            ...prevState,
            [name]: value,
        };
        });
    };

    return(
        <>
            <label for="belt-select">Select a belt:</label>
            <select id="belt-select" name={"beltRank"} value={selected} onChange={handleBeltChange}>
                <option value="Little NinjaWhite">Little Ninja White</option>
                <option value="Little NinjaWhite-Y">Little Ninja White-Y</option>
                <option value="Little NinjaWhite-O">Little Ninja White-O</option>
                <option value="Little NinjaWhite-G">Little Ninja White-G</option>
                <option value="Little NinjaWhite-B">Little Ninja White-B</option>
                <option value="Little NinjaWhite-P">Little Ninja White-P</option>
                <option value="Little NinjaWhite-Br">Little Ninja White-Br</option>
                <option value="Little NinjaWhite-Bl">Little Ninja White-Bl</option>
                <option value="White">White</option>
                <option value="White - Bl Str">White - Bl Str</option>
                <option value="Yellow">Yellow</option>
                <option value="Yellow - W Str">Yellow - W Str</option>
                <option value="Yellow - Bl Str">Yellow - Bl Str</option>
                <option value="Orange">Orange</option>
                <option value="Orange - W Str">Orange - W Str</option>
                <option value="Orange - Bl Str">Orange - Bl Str</option>
                <option value="Green">Green</option>
                <option value="Green - W Str">Green - W Str</option>
                <option value="Green - Bl Str">Green - Bl Str</option>
                <option value="Blue">Blue</option>
                <option value="Blue - W Str">Blue - W Str</option>
                <option value="Blue - Bl Str">Blue - Bl Str</option>
                <option value="Purple">Purple</option>
                <option value="Purple - W Str">Purple - W Str</option>
                <option value="Purple - Bl Str">Purple - Bl Str</option>
                <option value="Brown">Brown</option>
                <option value="Brown - W Str">Brown - W Str</option>
                <option value="Brown - Bl Str">Brown - Bl Str</option>
                <option value="Jr Black - White">Jr Black - White</option>
                <option value="Jr Black - Yellow">Jr Black - Yellow</option>
                <option value="Jr Black - Orange">Jr Black - Orange</option>
                <option value="Jr Black - Green">Jr Black - Green</option>
                <option value="Jr Black - Blue">Jr Black - Blue</option>
                <option value="Jr Black - Purple">Jr Black - Purple</option>
                <option value="Jr Black - Brown">Jr Black - Brown</option>
                <option value="Black">Black</option>
            </select>
        </>
    )
}

export default BeltDropdown