import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="LoadingPage">
      Loading, please wait...
      <CircularProgress />
    </div>
  );
}
