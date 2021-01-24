import React from "react";
import "./App.css";
import MoviesList from "./movies.json";

class CheckBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieinfo: MoviesList.slice(0, 10),
      selectedItems: [],
      enableCheckAll: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleChange(event) {
    const { checked } = event.target;
    let values = document.getElementsByName("checkbox");
    let defaultValues = [];
    for (let i = 0; i < values.length; i++) {
      if (checked === true) {
        this.setState({
          enableCheckAll: true,
        });
        values[i].checked = true;
        defaultValues.push(values[i].defaultValue);
        this.setState({
          selectedItems: defaultValues,
        });
      } else {
        values[i].checked = false;
        this.setState({ enableCheckAll: false, selectedItems: [] });
      }
    }
  }

  handleCheckBoxChange() {
    const array = [];
    const selected = document.getElementsByName("checkbox");
    let count = 0;
    for (var i = 0; i <= selected.length; i++) {
      if (selected[i] && selected[i].checked && selected[i].checked === true) {
        count = count + 1;
        array.push(selected[i].value);
        this.setState({ selectedItems: array });
      }
    }
    if (count === selected.length) {
      this.setState({
        enableCheckAll: true,
      });
    } else {
      this.setState({ enableCheckAll: false });
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            id="selectAll"
            name="checkboxAll"
            type="checkbox"
            checked={this.state.enableCheckAll}
            onChange={this.handleChange}
          />
          <label>Select All</label>
        </div>
        <div>
          {this.state.movieinfo.map((item, index) => {
            return (
              <div>
                <span class="list label-new">
                  <ul class="ngc">
                    <li class="col-xs-2 borders">
                      <input
                        id={index + 1}
                        name="checkbox"
                        type="checkbox"
                        onChange={this.handleCheckBoxChange}
                        value={item.Title}
                      />
                      <label htmlFor={this.state.movieinfo + item.Title}>
                        {item.Title}
                      </label>
                    </li>
                  </ul>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CheckBoxes;
