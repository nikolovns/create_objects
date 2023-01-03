export const CreateProduct = () => {
    return (
        <div>
            <h2>Create Product</h2>
            <form>
                <div>
                    <label htmlFor="type">Product type:</label>
                    <input id="type" name="type" type="text" />
                </div>
                <div>
                    <label htmlFor="model">Model name:</label>
                    <input id="model" name="model" type="text" />
                </div>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input id="width" name="width" type="text" />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input id="height" name="height" type="text" />
                </div>
                <div>
                    <label htmlFor="shape">Shape:</label>
                    <input id="shape" name="shape" type="text" />
                </div>

                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>

    )
}