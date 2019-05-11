import React, { Component } from "react";
import "./Gallery.css";

import { Button, Segment, Label } from "semantic-ui-react";

import { connect } from "react-redux";

import { loadImages } from "../actions/images";

class Gallery extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    return (
      <>
        <div className="heading">Unsplash Image Gallery</div>
        <div className="gallery-container">
          <div className="gallery">
            <section className="grid">
              {this.props.images.map(image => (
                <div
                  key={image.id}
                  className={`item item-${Math.ceil(
                    image.height / image.width
                  )}`}
                  style={{
                    position: "relative"
                  }}
                >
                  {this.props.stats && (
                    <Label
                      tag
                      color="blue"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px"
                      }}
                    >
                      Downloads
                      <Label.Detail>{this.props.stats[image.id]}</Label.Detail>
                    </Label>
                  )}
                  <img src={image.urls.small} alt={image.description} />
                </div>
              ))}
            </section>
          </div>
          <div className="loading-btn-container">
            <Button
              basic
              loading={this.props.loading}
              onClick={() => {
                this.props.loadImages();
              }}
            >
              Load more images
            </Button>
          </div>
          {this.props.error && (
            <div className="error-container">
              <Segment color="red">{this.props.error.toString()}</Segment>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    loading: state.images_loading,
    error: state.images_error,
    stats: state.stats
  };
};

export default connect(
  mapStateToProps,
  {
    loadImages
  }
)(Gallery);
