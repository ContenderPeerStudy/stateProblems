import State1 from "../q/state1";
import State2 from "../q/state2";
import State3 from "../q/state3";
import IsModalOpenProvider from "../context/modal_open_context";
function StatesPage() {
    return (
        <IsModalOpenProvider>
            <div>
                <State1 />
                <hr />
                <State2 />
                <hr />
                <State3 />
                <hr />
            </div>
        </IsModalOpenProvider>
    );
}
export default StatesPage;
