/* eslint-disable jsx-a11y/img-redundant-alt */
const ImagePreview = ({ url, heading }) => {
  return (
    <div>
      {url && (
        <div>
          <h1 className="right-heading">{heading}</h1>
          <div className="preview-image">
            <img src={url} alt="image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
