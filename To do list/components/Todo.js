export default function Todo({$target, initialState, onClick}){
    const $element = document.createElement('div');
    $target.appendChild($element);

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $element.innerHTML = `
            <h1>Simple TodoList</h1>
            <ul>
                ${this.state.map(({text}) => `<li>${todo}</li>`).join('')}
            </ul>
        `
    }

    this.render();
}
