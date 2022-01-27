import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <main>
                <span className={"intro"}>
                    Thanks for Watching <br />
                    <span className={"intro__focus"}>Like</span> &
                    <span className={"intro__focus"}> Subscribe</span>
                    <br />
                    for more!
                </span>
            </main>
        </>
    );
}

export default App;
