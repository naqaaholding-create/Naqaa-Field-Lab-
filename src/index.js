const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return json({
        ok: true,
        service: "NAQAA Field Lab API",
        status: "running"
      });
    }

    if (request.method === "GET" && url.pathname === "/api/v1/status") {
      return json({
        ok: true,
        application: "NAQAA Field Lab",
        apiVersion: "1.0.0",
        paymentMode: "USDT-TRC20",
        paymentEnabled: false,
        message: "API scaffold is running; production payment verification is not configured."
      });
    }

    return json({
      ok: false,
      error: "NOT_FOUND",
      message: "Endpoint not found"
    }, 404);
  }
};
