import MovieItem from "./MovieItem";

export interface MovieItemProps {
  src: string;
  title: string;
  runTime: string;
  main: string;
}
const MovieGrid = () => {
  const moviData: MovieItemProps[] = [
    {
      title: "A",
      src: "https://images.unsplash.com/photo-1677454563342-e353acd2e003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      runTime: "120m",
      main: "A",
    },
    {
      title: "B",
      src: "https://images.unsplash.com/photo-1677411997277-5fea81a74a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      runTime: "120m",
      main: "A",
    },
    {
      title: "C",
      src: "https://images.unsplash.com/photo-1677430586198-c9e789c79561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      runTime: "120m",
      main: "A",
    },
    {
      title: "D",
      src: "https://images.unsplash.com/photo-1677443844002-24abd69483b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      runTime: "120m",
      main: "A",
    },
    {
      title: "E",
      src: "https://images.unsplash.com/photo-1677430555008-f1e90538d0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      runTime: "120m",
      main: "A",
    },
    {
        title: "C",
        src: "https://images.unsplash.com/photo-1677430586198-c9e789c79561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        runTime: "120m",
        main: "A",
      },
      {
        title: "D",
        src: "https://images.unsplash.com/photo-1677443844002-24abd69483b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
        runTime: "120m",
        main: "A",
      },
      {
        title: "E",
        src: "https://images.unsplash.com/photo-1677430555008-f1e90538d0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        runTime: "120m",
        main: "A",
      },
  ];
  return (<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {moviData.map((item, index) => {
        return <MovieItem key={index} src={item.src} title={item.title} runTime={item.runTime} main={item.main}/>
    })}
  </div>);
};

export default MovieGrid;
