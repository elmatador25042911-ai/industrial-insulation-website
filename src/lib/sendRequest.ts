import func2url from "../../backend/func2url.json";

export type RequestPayload = {
  name: string;
  phone: string;
  company?: string;
  email?: string;
  message?: string;
  source?: string;
  [key: string]: string | undefined;
};

export async function sendRequest(payload: RequestPayload): Promise<void> {
  const res = await fetch(func2url["send-request"], {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("send failed");
  }
}
