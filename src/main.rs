use yew::prelude::*;

#[derive(Clone, PartialEq)]
struct Todo {
    id: usize,
    title: String,
    description: String,
}

#[function_component(TodoList)]
fn todo_list() -> Html {
    let todos = use_state(|| vec![Todo {
        id: 1,
        title: "Learn Rust".to_string(),
        description: "Learn how to use Rust".to_string(),
    }]);

    html! {
        <div class="container">
            <header>
                <hgroup>
                    <h1>{ "TODO LIST" }</h1>
                    <h2>{ "Get it done today!" }</h2>
                </hgroup>
            </header>
            <article>
                <form>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        aria-label="Title"
                        required={true}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        aria-label="Description"
                        required={true}
                    />
                    <button type="submit">{"Create"}</button>
                </form>
            </article>
            <main class="grid">
                {
                    for todos.iter().map(|todo| {
                        html! {
                            <article>
                                <header>{ &todo.title }</header>
                                { &todo.description }
                                <footer>
                                    <button>{ "Done!" }</button>
                                </footer>
                            </article>
                        }
                    })
                }
            </main>
        </div>
    }
}

fn main() {
    yew::Renderer::<TodoList>::new().render();
}
