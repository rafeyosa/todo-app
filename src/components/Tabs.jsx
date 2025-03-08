export function Tabs(props) {
  const { selectedTab, setSelectedTab, todos } = props;
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        let numOfTasks = 0;
        if (tab === "All") numOfTasks = todos.length;
        if (tab === "Open")
          numOfTasks = todos.filter((val) => !val.complete).length;
        if (tab === "Completed")
          numOfTasks = todos.filter((val) => val.complete).length;

        return (
          <button
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : "")
            }
            onClick={()=> {
              setSelectedTab(tab)
            }}
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
