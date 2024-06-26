export default function CustomRecipeGreen (props) {
    const { onChange } = props;

    return (
        <div className="flex flex-col gap-1 text-default py-6 px-2 outline items-center rounded-lg outline-success">
            <p className="text-xl font-semibold mb-4 text-center">Is this a custom recipe, with your own special twist?</p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <input type="radio" id="customInputNo" name="is_personal"
                        className="radio radio-primary selected" 
                        value={false}
                        onChange={onChange}
                        />
                    <label htmlFor="customInputNo"><span className="font-bold">No</span>, this is not my recipe.</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" id="customInputYes" name="is_personal"
                        className="radio radio-primary selected" 
                        defaultChecked
                        value={true}
                        onChange={onChange}
                    />
                    <label htmlFor="customInputYes"><span className="font-bold">Yes</span>, this recipe has my unique flare!</label>
                </div>
            </div>
        </div>
    );
}