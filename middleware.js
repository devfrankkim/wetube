import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Records Tube";
  res.locals.routes = routes;
  res.locals.user = {
    isAutenticated: true,
    id: 1
  };
  next(); // next() => req or handler 전달.
};

// middleware should always return next();

// locals에 로컬 변수를 저장하면, 이 변수들을 view, 템플릿에서 모든 곳에서 사용 할 수 있다.
// locals로 받아서 변수를 만들 수도 있다.

// 글로벌 변수로 사용하기 위한 방법
// req, res, next => (res.locals)
// res.locals.variableName = "TEXT"
// res.locals.routes = routes;

// next()
