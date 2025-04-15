interface AddHouseButtonProps {
    onAddHouse: () => void;
};

const AddHouseButton = ({ onAddHouse }: AddHouseButtonProps) => {
    return (
        <button className="btn btn-primary" onClick={onAddHouse}>Add</button>
    );
};

export default AddHouseButton;