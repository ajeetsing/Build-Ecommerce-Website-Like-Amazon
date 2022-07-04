import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <div
      className="d-flex justify-content-center "
      style={{ width: '3rem', height: '3rem' }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
