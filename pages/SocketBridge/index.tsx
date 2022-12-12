import dynamic from "next/dynamic";
import { WidgetProps } from "@socket.tech/plugin";
import { useDynamicContext } from "@dynamic-labs/sdk-react";
const Bridge = dynamic<WidgetProps>(
  () => import("@socket.tech/plugin").then((mod) => mod.Bridge),
  { ssr: false }
);

function SocketBridge() {
  const { walletConnector } = useDynamicContext();
  const provider = walletConnector?.getWeb3Provider();

  const customize = {
    width: 360,
    responsiveWidth: false,
    borderRadius: 1,
    primary: "rgb(9,4,31)",
    secondary: "rgb(26,27,52)",
    text: "rgb(254,254,254)",
    secondaryText: "rgb(240,240,240)",
    accent: "rgb(64,199,249)",
    onAccent: "rgb(255,255,255)",
    interactive: "rgb(15, 20, 66)",
    onInteractive: "rgb(255,255,255)",
    outline: "rgb(18,26,91)",
  };
  const NEXT_PUBLIC_SOCKET_API_KEY =
    process.env.NEXT_PUBLIC_SOCKET_API_KEY || "";
  return (
    <div>
      {provider && (
        <Bridge
          provider={provider}
          API_KEY={NEXT_PUBLIC_SOCKET_API_KEY}
          customize={customize}
        />
      )}
    </div>
  );
}

export default SocketBridge;
