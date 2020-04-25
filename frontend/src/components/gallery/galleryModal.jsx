import React from "react";
import { connect } from "react-redux";

import {
  ArrowUp,
  ArrowDown,
  Eye,
  TrendingUp,
  ArrowRightCircle,
  ArrowLeftCircle,
} from "react-feather";
import store from "./../../modules/store/index";
import {
  setCurrentPost,
  setImageIndex,
} from "../../modules/store/actions/index";
const mapStateToProps = (state) => {
  return { currentPost: state.currentPost, imageIndex: state.imageIndex };
};

const ConnectedGalleryModal = ({ currentPost, imageIndex }) => {
  if (!currentPost) return null;
  return (
    <div
      className="modal d-none d-sm-block"
      style={{
        display: currentPost ? "inline" : "none",
      }}
      role="dialog"
    >
      <div
        className="modal-dialog"
        style={{
          maxWidth: "110vh",
        }}
        role="document"
      >
        <div className="modal-content" style={{ backgroundColor: "#2e3035" }}>
          <div className="modal-body">
            <button
              type="button"
              className="close float-right"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => store.dispatch(setCurrentPost(null))}
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
              <h2 className="text-left m-4">{currentPost.title}</h2>

              <div className="row">
                <div className="col-md-1" style={{ marginTop: "30vh" }}>
                  <ArrowLeftCircle
                    color="white"
                    style={{
                      cursor: "pointer",
                      display: currentPost.images[imageIndex - 1]
                        ? "inline"
                        : "none",
                    }}
                    onClick={(e) =>
                      currentPost.images[imageIndex - 1]
                        ? store.dispatch(setImageIndex(imageIndex - 1))
                        : store.dispatch(setImageIndex(imageIndex))
                    }
                    size={40}
                    className="mr-4"
                  ></ArrowLeftCircle>
                </div>
                <div className="col-md-10">
                  <img
                    style={{ height: "60vh", maxWidth: "100vh" }}
                    src={currentPost.images[imageIndex].link}
                    alt={currentPost.title}
                  />
                </div>
                <div className="col-md-1" style={{ marginTop: "30vh" }}>
                  <ArrowRightCircle
                    color="white"
                    style={{
                      cursor: "pointer",
                      display: currentPost.images[imageIndex + 1]
                        ? "inline"
                        : "none",
                    }}
                    onClick={(e) =>
                      currentPost.images[imageIndex + 1]
                        ? store.dispatch(setImageIndex(imageIndex + 1))
                        : store.dispatch(setImageIndex(imageIndex))
                    }
                    size={40}
                    className="mr-4"
                  ></ArrowRightCircle>
                </div>
              </div>

              <div className="description m-4 text-left">
                {currentPost.ups}
                <span title="Up Votes">
                  <ArrowUp color="white" size={40} className="mr-4"></ArrowUp>
                </span>
                {currentPost.downs}
                <span title="Down Votes">
                  <ArrowDown
                    color="white"
                    size={40}
                    className="mr-4"
                  ></ArrowDown>
                </span>
                {currentPost.views}
                <span title="Views">
                  <Eye color="white" size={40} className="mr-4"></Eye>
                </span>
                {currentPost.score}
                <span title="Score">
                  <TrendingUp
                    color="white"
                    size={40}
                    className="mr-4"
                  ></TrendingUp>
                </span>
              </div>
              <p> {currentPost.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryModal = connect(mapStateToProps)(ConnectedGalleryModal);

export default GalleryModal;
