import { Request, Response, NextFunction } from 'express';

<% if (specification === 'openapi_3') { %>
export default function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const errors = err.errors || [{ message: err.message }];
  res.status(err.status || 500).json({ errors });
}
<% } else { %>
// Error handler to display the error as HTML
// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(err,  req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500);
  res.send(
    `<h1>${err.status || 500} Error</h1>` +
    `<pre>${err.message}</pre>`);
}
<% } %>
