import React, { Component } from "react";
import { gallery } from "./../../services/galleryService";
import {
  ArrowUp,
  ArrowDown,
  Eye,
  Clock,
  Grid,
  List,
  TrendingUp,
} from "react-feather";
import { loadGallery } from "../../modules/store/actions";
class GalleryGrid extends Component {
  state = {
    result: null,
    galleryId: 0,
    section: "hot",
    sort: "viral",
    window: "day",
    showViral: "true",
    activePost: null,
    baseData: {
      section: [
        { title: "Hot", value: "hot" },
        { title: "Top", value: "top" },
        { title: "User", value: "user" },
      ],
      sort: [
        { title: "Viral", value: "viral" },
        { title: "Top", value: "top" },
        { title: "Time", value: "time" },
      ],
      window: [
        { title: "Day", value: "day" },
        { title: "Week", value: "week" },
        { title: "Month", value: "month" },
        { title: "Year", value: "year" },
        { title: "All", value: "all" },
      ],
    },
  };
  constructor(props) {
    super(props);
    this.setViral = this.setViral.bind(this);
    this.setSort = this.setSort.bind(this);
    this.setSection = this.setSection.bind(this);
    this.showPost = this.showPost.bind(this);
    this.setWindow = this.setWindow.bind(this);
  }

  componentDidMount() {
    this.fetchGallery();
  }
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  fetchGallery() {
    this.setState({ result: null });
    this._asyncRequest = gallery(
      this.state.galleryId,
      this.state.section,
      this.state.sort,
      this.state.window,
      this.state.showViral
    ).then((result) => {
      this._asyncRequest = null;
      this.setState({ result });
      window.store.dispatch(loadGallery(result));
    });
  }
  renderGalleryList() {
    return this.state.result.data.gallery.data.map((item, i) => {
      if (!item.images) return "";

      const cover = item.images.filter((img) => {
        return img.id === item.cover;
      });
      if (!cover) return "";
      else {
        if (cover.length > 0 && cover[0].type && cover[0].type === "video/mp4")
          return "";
        else if (!cover[0]) {
          return "";
        } else {
          return (
            <div className="card " key={i} onClick={() => this.showPost(item)}>
              <img
                className="card-img-top"
                src={cover[0].link}
                alt={item.title}
              />
              <div className="description">{item.title}</div>
              <div className="description">
                {item.ups}
                <ArrowUp color="white" size={20}></ArrowUp> {item.downs}
                <ArrowDown color="white" size={20}></ArrowDown> {item.views}
                <Eye color="white" size={20}></Eye>
              </div>
            </div>
          );
        }
      }
    });
  }
  showPost(post) {
    this.setState({ activePost: post });
  }
  renderPostModal() {
    if (!this.state.activePost) return;
    return (
      <div
        className="modal"
        style={{
          display: this.state.activePost ? "inline" : "none",
        }}
        tabindex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog"
          style={{
            maxWidth: "110vh",
          }}
          role="document"
        >
          <div
            className="modal-content"
            onClick={() => this.setState({ activePost: null })}
            style={{ backgroundColor: "#2e3035" }}
          >
            <div className="modal-body">
              <button
                type="button"
                className="close float-right"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => this.setState({ activePost: null })}
              >
                <span
                  aria-hidden="true"
                  style={{ color: "white", position: "fixed", margin: "-1rem" }}
                >
                  &times;
                </span>
              </button>
              <div
                className="w-100 text-center"
                style={{ backgroundColor: "#2e3035" }}
              >
                <h2 className="text-left m-4">{this.state.activePost.title}</h2>
                <img
                  style={{ height: "60vh", maxWidth: "100vh" }}
                  src={this.state.activePost.images[0].link}
                  alt={this.state.activePost.title}
                />
                <div className="description m-4 text-left">
                  {this.state.activePost.ups}
                  <span title="Up Votes">
                    <ArrowUp color="white" size={40} className="mr-4"></ArrowUp>
                  </span>
                  {this.state.activePost.downs}
                  <span title="Down Votes">
                    <ArrowDown
                      color="white"
                      size={40}
                      className="mr-4"
                    ></ArrowDown>
                  </span>
                  {this.state.activePost.views}
                  <span title="Views">
                    <Eye color="white" size={40} className="mr-4"></Eye>
                  </span>
                  {this.state.activePost.score}
                  <span title="Score">
                    <TrendingUp
                      color="white"
                      size={40}
                      className="mr-4"
                    ></TrendingUp>
                  </span>
                </div>
                <p> {this.state.activePost.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderLoading() {
    return (
      <div>
        <div className="container">
          {this.renderFilterList()}

          <div className="indicator">
            <img src={require("./../../assets/indicator.gif")} alt="" />
          </div>
        </div>
      </div>
    );
  }
  setViral(payload) {
    this.setState({ showViral: payload });
    this.fetchGallery();
  }
  setWindow(payload) {
    this.setState({ window: payload });
    this.fetchGallery();
  }
  setSort(payload) {
    this.setState({ sort: payload });
    this.fetchGallery();
  }
  setSection(payload) {
    this.setState({ section: payload });
    this.fetchGallery();
  }
  renderFilterList() {
    const allPostColor =
      this.state.showViral === "true"
        ? "btn btn-success btn-sm"
        : "btn btn-secondary btn-sm";
    const exceptViralColor =
      this.state.showViral === "false"
        ? "btn btn-success btn-sm"
        : "btn btn-secondary btn-sm";
    const rising =
      this.state.section === "user" ? (
        <a
          className="dropdown-item"
          href="/#"
          onClick={(e) => this.setSort("rising", e)}
        >
          Rising
        </a>
      ) : (
        <React.Fragment />
      );
    const sectionItems = this.state.baseData.section.map((section, i) => {
      return (
        <a
          key={i}
          className="dropdown-item"
          href="/#"
          onClick={(e) => this.setSection(section.value, e)}
        >
          {section.title}
        </a>
      );
    });
    const windowItems = this.state.baseData.window.map((window, i) => {
      return (
        <a
          key={i}
          className="dropdown-item"
          href="/#"
          onClick={(e) => this.setWindow(window.value, e)}
        >
          {window.title}
        </a>
      );
    });
    const sortItems = this.state.baseData.sort.map((sort, i) => {
      return (
        <a
          key={i}
          className="dropdown-item"
          href="/#"
          onClick={(e) => this.setSort(sort.value, e)}
        >
          {sort.title}
        </a>
      );
    });
    return (
      <React.Fragment>
        <div className="row">
          <div
            className="btn-group btn-group-sm mt-4 col-md-4 text-left"
            style={{ margin: "0 auto" }}
            role="group"
            aria-label="Large button group"
          >
            <button
              type="button"
              onClick={(e) => this.setViral("true", e)}
              className={allPostColor}
            >
              All Posts
            </button>
            <button
              type="button"
              onClick={(e) => this.setViral("false", e)}
              className={exceptViralColor}
            >
              Exclude Virals
            </button>
          </div>
          <div className="col-md-2  col-xs-6"></div>
          <div className="dropdown mt-4 col-xs-6 col-md-2">
            <button
              className="btn  w-100 btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Grid /> {this.state.section.toUpperCase()}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {sectionItems}
            </div>
          </div>
          <div className="dropdown  mt-4 col-xs-6 col-md-2">
            <button
              className="btn  w-100 btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <List /> {this.state.sort.toUpperCase()}
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton2"
            >
              {sortItems}
              {rising}
            </div>
          </div>
          <div className="dropdown  mt-4 col-xs-6 col-md-2">
            <button
              className="btn  w-100 left-align btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Clock /> {this.state.window.toUpperCase()}
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton3"
            >
              {windowItems}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  render() {
    if (this.state.result === null) {
      return this.renderLoading();
    } else {
      return (
        <div>
          <div className="container">
            {this.renderFilterList()}

            <div className="card-columns mt-4">
              <span>{this.renderGalleryList()}</span>
            </div>
            {this.renderPostModal()}
          </div>
        </div>
      );
    }
  }
}

export default GalleryGrid;
