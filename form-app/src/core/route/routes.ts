const ROUTES = {
    HOME: '/',
    SEND_TICKET: '/send-ticket',
    LOGIN: '/login',
    ADMIN: '/admin',
    ADMIN_VIEW_TICKET: '/admin/ticket/:id',
    INQUIRY: '/inquiry',
    INQUIRY_DETAIL: '/inquiry/:id',
} as const;
export default ROUTES;
//  <Route path="/send-ticket" element={<ReportForm />} />
// <Route path="/inquiry" element={<Inquiry />} />
// <Route path="/login" element={<Login />} />
// <Route path="/admin">
