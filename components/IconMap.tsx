import { ReactNode } from "react";

type IconBody = ReactNode | { default: ReactNode; active: ReactNode };
type IconType = Record<string, IconBody>;

export const IconMap = {
  // ---- static icons ----
  add: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M24.5 20.19h-4.312m-4.312 0h4.312m0 0v-4.313m0 4.313v4.312"
      />
      <circle
        cx={20.206}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </>
  ),
  "add-friend": (
    <>
      <path
        stroke="currentColor"
        strokeWidth={2.021}
        d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m16.838 20.205-3.552 2.368a3.37 3.37 0 0 0-1.5 2.802v1.677c0 .868.704 1.572 1.572 1.572h12.74M23.573 21.047h2.526m2.525 0H26.1m0 0v-2.526m0 2.526v2.526"
      />
    </>
  ),
  "add-simple": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M20.205 13.061v7.144m0 7.144v-7.144m0 0h-7.143m7.143 0h7.144"
    />
  ),
  "add-to-library": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M11.562 20.08v8.77M17.324 20.08v8.77M23.087 28.85V11.562l2.88 1.994 2.882 1.995v13.297zM11.832 14.047h2.526m2.526 0h-2.526m0 0v-2.526m0 2.526v2.526"
    />
  ),
  "add-to-playlist": (
    <>
      <rect
        width={20}
        height={20}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={3}
        transform="matrix(1 0 0 -1 9.827 31.33)"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.827 11.33h16a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M15.827 21.33h4m4 0h-4m0 0v-4m0 4v4"
      />
    </>
  ),
  "add-to-queue": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.357}
        d="M19.364 11.787h-4.771a2.806 2.806 0 0 0 0 5.613h4.77"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M11.787 23.012h16.837M11.787 28.625h16.837"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M23.573 14.313h2.526m2.525 0H26.1m0 0v-2.526m0 2.526v2.525"
      />
    </>
  ),
  adjust: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M19.827 13.086h-7a2 2 0 0 0 0 4h7"
      />
      <rect
        width={6.231}
        height={6.231}
        x={23.596}
        y={12.086}
        stroke="currentColor"
        strokeWidth={2}
        rx={3.115}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M20.827 27.316h7a2 2 0 1 0 0-4h-7"
      />
      <rect
        width={6.231}
        height={6.231}
        x={17.058}
        y={28.316}
        stroke="currentColor"
        strokeWidth={2}
        rx={3.115}
        transform="rotate(-180 17.058 28.316)"
      />
    </>
  ),
  album: (
    <>
      <circle
        cx={20.205}
        cy={20.206}
        r={2.755}
        stroke="currentColor"
        strokeWidth={2.021}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.021}
        d="M20.205 30.309c-5.58 0-10.102-4.523-10.102-10.103s4.523-10.102 10.102-10.102c2.913 0 5.538 1.232 7.381 3.204"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M29.296 17.58v7.577m0 0v3.763c0 .75-.534 1.403-1.282 1.379-1.239-.039-2.928-.483-2.928-2.616 0-3.368 4.21-2.526 4.21-2.526"
      />
    </>
  ),
  "arrow-down": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M20.626 13.05v14.313m0 0 5.893-5.893m-5.893 5.893-5.893-5.893"
    />
  ),
  "arrow-left": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M27.783 20.206H13.47m0 0 5.894 5.894m-5.894-5.894 5.894-5.893"
    />
  ),
  "arrow-right": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M13.47 20.206h14.312m0 0-5.893-5.893m5.893 5.893-5.893 5.893"
    />
  ),
  "arrow-up": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M20.626 27.361V13.05m0 0-5.893 5.893m5.893-5.893 5.894 5.893"
    />
  ),
  artist: (
    <>
      <path
        stroke="currentColor"
        strokeWidth={2.021}
        d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m16.838 20.205-3.552 2.368a3.37 3.37 0 0 0-1.5 2.802v1.677c0 .868.704 1.572 1.572 1.572h6.848"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M27.783 13.469v7.577m0 0v3.763c0 .749-.534 1.402-1.283 1.379-1.238-.04-2.927-.483-2.927-2.616 0-3.368 4.21-2.526 4.21-2.526"
      />
    </>
  ),
  audiobook: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.33 30.33-8.538-2.382a2 2 0 0 1-1.462-1.927V12.85a2 2 0 0 1 2.453-1.948l6 1.395a2 2 0 0 1 1.547 1.948zm0 0 8.537-2.382a2 2 0 0 0 1.463-1.927V12.913a2 2 0 0 0-2.5-1.937l-4.7 1.214"
    />
  ),
  camera: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.578 16.835v9.49a2.78 2.78 0 0 0 2.778 2.778h19.445a2.78 2.78 0 0 0 2.777-2.778v-9.49a2.78 2.78 0 0 0-2.777-2.778h-1.45c-.534 0-1.042-.23-1.393-.632l-1.934-2.209a1.85 1.85 0 0 0-1.394-.631H16.19c-.534 0-1.042.23-1.394.631l-1.934 2.209c-.351.402-.859.632-1.393.632h-1.112a2.78 2.78 0 0 0-2.778 2.778"
      />
      <circle
        cx={20.078}
        cy={20.306}
        r={4.167}
        stroke="currentColor"
        strokeWidth={2}
      />
    </>
  ),
  checked: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.02}
      d="m13.081 19.316 5.38 5.38 9.863-9.863"
    />
  ),
  close: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="m25.257 15.154-5.052 5.052m-5.05 5.051 5.05-5.051m0 0-5.05-5.052m5.05 5.052 5.052 5.051"
    />
  ),
  device: (
    <>
      <rect
        width={11.787}
        height={17.68}
        x={17.259}
        y={11.367}
        stroke="currentColor"
        strokeWidth={2.063}
        rx={2.947}
      />
      <circle cx={23.152} cy={23.154} r={2.947} fill="currentColor" />
      <circle cx={23.152} cy={15.786} r={1.473} fill="currentColor" />
      <circle cx={12.839} cy={27.573} r={1.473} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.063}
        d="M13.576 22.416h-.737c-.814 0-1.473-.66-1.473-1.474v-5.156c0-.814.66-1.473 1.473-1.473h.736"
      />
    </>
  ),
  down: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.357}
      d="m15.154 18.523 5.051 5.051 5.052-5.051"
    />
  ),
  download: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M20.205 15.154v9.863m0 0 3.368-3.368m-3.368 3.367-3.367-3.367"
      />
      <circle
        cx={20.205}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </>
  ),
  downvote: (
    <>
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M29.55 13.417v7.987c0 .875-.71 1.584-1.585 1.584h-1.632c-.564 0-1.086.3-1.37.788l-2.991 5.148c-.813 1.4-2.953.823-2.953-.795v-3.557c0-.875-.71-1.584-1.584-1.584h-2.122a3.168 3.168 0 0 1-3.088-3.877l1.107-4.82a3.17 3.17 0 0 1 3.087-2.458h11.546c.875 0 1.584.709 1.584 1.583Z"
      />
      <circle
        cx={20.205}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </>
  ),
  dynamic: (
    <>
      <path
        fill="currentColor"
        d="M19.719 10.086h2.918l-2.918 9.655h3.862l-.944 2.655-2.918 8.207 2.152-8.207h-4.324z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m22.637 22.396.944-2.655H19.72l2.918-9.655h-2.918l-2.172 12.31h4.324m.766 0-2.918 8.207 2.152-8.207m.766 0h-.766"
      />
      <circle
        cx={20.205}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </>
  ),
  edit: (
    <>
      <mask id="Edit_svg__a" fill="#fff">
        <path d="M17.235 26.428a1 1 0 0 1-1.415 0L13.7 24.306a1 1 0 0 1 0-1.414L27.488 9.104a2.5 2.5 0 1 1 3.535 3.535z" />
      </mask>
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M17.235 26.428a1 1 0 0 1-1.415 0L13.7 24.306a1 1 0 0 1 0-1.414L27.488 9.104a2.5 2.5 0 1 1 3.535 3.535z"
        mask="url(#Edit_svg__a)"
      />
      <path
        stroke="#E0E0E0"
        strokeLinecap="round"
        strokeOpacity={0.5}
        strokeWidth={2}
        d="m12.58 26.016 1.53 1.529-2.905 1.376z"
      />
    </>
  ),
  filter: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11.076 14.08h18M14.584 20.08h10M17.584 26.08h4"
    />
  ),
  folder: (
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30.832 26.33a3 3 0 0 1-3 3h-16a3 3 0 0 1-3-3v-12.5a3 3 0 0 1 3-3h4.36a3 3 0 0 1 2.526 1.381l.345.538a3 3 0 0 0 2.525 1.381h6.244a3 3 0 0 1 3 3z"
    />
  ),
  font: (
    <path
      fill="currentColor"
      d="M11.825 27.249a1.37 1.37 0 1 1-2.583-.918l4.667-12.924a2 2 0 0 1 1.881-1.321h.074a2 2 0 0 1 1.881 1.32l4.658 12.898a1.391 1.391 0 1 1-2.622.931l-.739-2.115a1 1 0 0 0-.944-.67h-4.586a1 1 0 0 0-.944.67zm3.64-10.367-1.592 4.526a.5.5 0 0 0 .471.666h2.942a.5.5 0 0 0 .47-.668l-1.61-4.524c-.075-.237-.6-.235-.682 0M25.136 27.609a.746.746 0 1 1-1.39-.547l2.5-6.238a1.175 1.175 0 0 1 2.181 0l2.493 6.223a.758.758 0 1 1-1.41.555l-.29-.75a.965.965 0 0 0-.9-.616h-1.992a.965.965 0 0 0-.9.617zm2-5.137-1.008 2.582h2.404l-1.02-2.582c-.044-.128-.327-.127-.376 0"
    />
  ),
  "full-screen": (
    <>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        clipPath="url(#Full_Screen_svg__a)"
      >
        <path d="M11.546 17.56v-3.247c0-.598.485-1.083 1.082-1.083h3.248M28.865 17.56v-3.247c0-.598-.485-1.083-1.083-1.083h-3.247M11.546 23.332v3.248c0 .598.485 1.082 1.082 1.082h3.248M28.865 23.332v3.248c0 .598-.485 1.082-1.083 1.082h-3.247" />
      </g>
      <defs>
        <clipPath id="Full_Screen_svg__a">
          <path fill="#fff" d="M10.103 11.787h20.205v17.32H10.103z" />
        </clipPath>
      </defs>
    </>
  ),
  grid: (
    <>
      <rect
        width={8.182}
        height={8.182}
        x={10.335}
        y={10.081}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={10.335}
        y={21.899}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={22.153}
        y={10.081}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={22.153}
        y={21.899}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
    </>
  ),
  hide: (
    <path
      stroke="currentColor"
      strokeWidth={1.684}
      d="M20.205 10.945a9.26 9.26 0 0 1 9.26 9.261c0 2.35-.872 4.493-2.314 6.126a9.24 9.24 0 0 1-6.946 3.135 9.26 9.26 0 0 1 0-18.522Z"
    />
  ),
  history: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.324 14.826v5.555l4.683 2.89"
      />
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M10.324 19.826c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10"
      />
      <path
        stroke="currentColor"
        strokeDasharray="3 3"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.324 19.826c0-5.523 4.477-10 10-10"
      />
    </>
  ),
  info: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M20.188 18.576v5.925"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M20.204 15.107v.038"
      />
      <circle
        cx={20.206}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </>
  ),
  karaoke: (
    <>
      <g clipPath="url(#Karaoke_svg__a)">
        <path
          stroke="currentColor"
          strokeWidth={1.684}
          d="M25.752 20.677a5.08 5.08 0 1 0-5.08-5.08m5.08 5.08a5.08 5.08 0 0 1-5.08-5.08m5.08 5.08L14.887 30.32a2.63 2.63 0 0 1-1.746.663 2.64 2.64 0 0 1-2.63-2.64c0-.636.228-1.253.643-1.734l9.518-11.012"
        />
      </g>
      <defs>
        <clipPath id="Karaoke_svg__a">
          <path fill="#fff" d="M8.827 8.833H32.4v23.573H8.827z" />
        </clipPath>
      </defs>
    </>
  ),
  left: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.357}
      d="m21.89 15.154-5.052 5.052 5.051 5.051"
    />
  ),
  list: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.584 14.08h12M11 14.08h1M16.584 20.08h12M11 20.08h1M16.584 26.08h12M11 26.08h1"
    />
  ),
  loop: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M15.996 26.097H13.47a3.37 3.37 0 0 1-3.367-3.367v-6.735a3.37 3.37 0 0 1 3.367-3.368h13.47a3.37 3.37 0 0 1 3.368 3.367v6.736a3.37 3.37 0 0 1-3.367 3.367h-6.736m0 0 3.368-3.367m-3.368 3.367 3.368 3.368"
    />
  ),
  lyrics: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11.086 14.076h12M11.086 21.076h8M11.086 28.076h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M29.086 13.076v8.934m0 0v4.666c0 .75-.532 1.399-1.282 1.4-1.482.003-3.718-.433-3.718-3.088 0-3.97 5-2.978 5-2.978"
      />
    </>
  ),
  miniplayer: (
    <>
      <path
        fill="currentColor"
        d="M19.364 22.733c0-.93.753-1.684 1.683-1.684h7.577c.93 0 1.684.754 1.684 1.684v4.21c0 .929-.754 1.683-1.684 1.683h-7.577c-.93 0-1.683-.754-1.683-1.684z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M16.838 27.783h-4.21c-.93 0-1.683-.754-1.683-1.684V14.313c0-.93.753-1.684 1.683-1.684h15.154c.93 0 1.684.754 1.684 1.684v4.21"
      />
    </>
  ),
  more: (
    <>
      <circle cx={11.787} cy={20.207} r={1.684} fill="currentColor" />
      <circle cx={20.205} cy={20.207} r={1.684} fill="currentColor" />
      <circle cx={28.624} cy={20.207} r={1.684} fill="currentColor" />
    </>
  ),
  move: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11.076 14.08h18M11.076 20.08h18M11.076 26.08h18"
    />
  ),
  "move-2": (
    <>
      <circle cx={16.727} cy={12.733} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={12.733} r={1.9} fill="currentColor" />
      <circle cx={16.727} cy={20.332} r={1.9} fill="currentColor" />
      <circle cx={16.727} cy={27.932} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={20.332} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={27.932} r={1.9} fill="currentColor" />
    </>
  ),
  muted: (
    <>
      <path
        d="M12.9848 26.3029C9.2618 24.4413 9.26171 19.1283 12.9848 17.2668L21.7172 12.9006C22.8018 12.3583 24.0717 13.1058 24.1498 14.2912L24.1537 14.4064V29.1633L24.1498 29.2795C24.0715 30.4647 22.8017 31.2114 21.7172 30.6691L12.9848 26.3029ZM13.8881 19.0744C11.6545 20.1914 11.6544 23.3793 13.8881 24.4963L22.1332 28.6183V14.9523L13.8881 19.0744Z"
        fill="currentColor"
      />
      <path
        d="M30.4756 19.4341C30.788 19.1217 31.294 19.1217 31.6065 19.4341C31.9189 19.7465 31.9189 20.2526 31.6065 20.565L30.1514 22.0201L31.6065 23.4751C31.9189 23.7876 31.9189 24.2936 31.6065 24.606C31.294 24.9184 30.788 24.9184 30.4756 24.606L29.0205 23.1509L27.5655 24.606C27.253 24.9184 26.747 24.9184 26.4346 24.606C26.1222 24.2936 26.1222 23.7875 26.4346 23.4751L27.8897 22.0201L26.4346 20.565C26.1222 20.2526 26.1222 19.7465 26.4346 19.4341C26.747 19.1217 27.253 19.1217 27.5655 19.4341L29.0205 20.8892L30.4756 19.4341Z"
        fill="currentColor"
      />
    </>
  ),
  news: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.684}
      d="M27.874 24.274H12.818c-1.19 0-1.84-1.387-1.078-2.301l1.255-1.506a1.4 1.4 0 0 0 .32-.921c-.022-2.12.35-10.005 7.03-10.005s7.053 7.885 7.032 10.005a1.4 1.4 0 0 0 .32.921l1.255 1.506c.761.914.111 2.301-1.078 2.301M16.838 27.08s.701 2.105 3.508 2.105 3.508-2.105 3.508-2.105"
    />
  ),
  next: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.526}
        d="M25.257 15.152v10.103"
      />
      <path
        fill="currentColor"
        d="M23.248 18.916a1.53 1.53 0 0 1 0 2.576l-7 4.49c-1.018.655-2.357-.077-2.357-1.287v-8.981c0-1.21 1.339-1.942 2.357-1.289z"
      />
    </>
  ),
  off: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M25.393 12.928a10.11 10.11 0 0 1 4.677 8.535c0 5.59-4.531 10.121-10.121 10.121S9.827 27.053 9.827 21.463c0-3.586 1.865-6.737 4.678-8.535"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.173 18.705V9.964"
      />
    </>
  ),
  "pause-simple": (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={4.191}
      d="M16.205 14.295v12.573M24.587 14.295v12.573"
    />
  ),
  "play-simple": (
    <path
      fill="currentColor"
      d="M28.094 18.234c1.257.726 1.257 2.54 0 3.266l-9.897 5.714c-1.257.726-2.828-.181-2.828-1.633V14.153c0-1.452 1.57-2.359 2.828-1.633z"
    />
  ),
  playing: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13.827 27.58v-5.5m6 5.5v-14.5m6 14.5v-9"
    />
  ),
  playlist: (
    <>
      <rect
        width={20}
        height={20}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={3}
        transform="matrix(1 0 0 -1 10.076 31.33)"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.076 11.33h16a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.588 22.286v-5.33c0-.346.28-.626.625-.626h2.117m-2.742 5.956v3.017c0 .555-.394 1.038-.948 1.026-.962-.021-2.31-.355-2.31-2.058 0-2.647 3.258-1.985 3.258-1.985"
      />
    </>
  ),
  podcast: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2.016}
      d="M19.931 13.777v5.93a4.447 4.447 0 0 0 8.895 0v-5.929a4.447 4.447 0 0 0-8.895 0ZM15.978 20.201s.989 7.906 8.4 7.906m0 0c7.412 0 8.4-7.906 8.4-7.906m-8.4 7.906v3.459M7.578 14.371h5.88M7.578 21.09h4.2M7.578 27.81h5.88"
    />
  ),
  prev: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.526}
        d="M15.154 15.152v10.103"
      />
      <path
        fill="currentColor"
        d="M17.162 21.493a1.53 1.53 0 0 1 0-2.577l7-4.49c1.02-.654 2.358.077 2.358 1.288v8.98c0 1.211-1.339 1.943-2.358 1.289z"
      />
    </>
  ),
  queue: (
    <>
      <path
        stroke="currentColor"
        strokeWidth={2.357}
        d="M11.787 14.592a2.806 2.806 0 0 1 2.806-2.807h11.225a2.806 2.806 0 1 1 0 5.613H14.593a2.806 2.806 0 0 1-2.806-2.806Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M11.787 23.012h16.837M11.787 28.623h16.837"
      />
    </>
  ),
  radio: (
    <>
      <circle cx={20.205} cy={20.207} r={1.964} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.964}
        d="M23.605 15.72a5.45 5.45 0 0 1 2.057 4.27 5.45 5.45 0 0 1-2.057 4.268m-6.8 0a5.45 5.45 0 0 1-2.056-4.269c0-1.642.725-3.114 1.872-4.114M26.325 12.35a9.73 9.73 0 0 1 3.703 7.639 9.73 9.73 0 0 1-3.703 7.64m-12.24 0a9.728 9.728 0 0 1-.332-15.003"
      />
    </>
  ),
  rate: (
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M19.413 10.983c.346-.81 1.493-.81 1.839 0l1.941 4.54a1 1 0 0 0 .83.602l4.918.444c.876.079 1.23 1.17.568 1.749l-3.718 3.25a1 1 0 0 0-.317.974l1.098 4.815c.196.858-.732 1.532-1.488 1.08l-4.239-2.531a1 1 0 0 0-1.025 0l-4.24 2.532c-.755.45-1.683-.223-1.487-1.081l1.097-4.814a1 1 0 0 0-.316-.976l-3.718-3.25c-.663-.578-.308-1.669.568-1.748l4.918-.444a1 1 0 0 0 .83-.602z"
    />
  ),
  "remove-from-queue": (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M11.787 23.012h16.837M11.787 28.623h16.837"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m17.693 12.64 2.539 2.54m2.539 2.538-2.539-2.538m0 0 2.539-2.54m-2.539 2.54-2.539 2.538"
      />
    </>
  ),
  right: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.357}
      d="m18.522 25.258 5.05-5.052-5.05-5.05"
    />
  ),
  settings: (
    <>
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M22.44 31.585h-4.232a1.07 1.07 0 0 1-.734-.275 1.1 1.1 0 0 1-.366-.688l-.34-2.557a4.3 4.3 0 0 1-.69-.33 9 9 0 0 1-.635-.413l-2.455.99q-.396.138-.79.028a1.05 1.05 0 0 1-.621-.468l-2.088-3.547a1 1 0 0 1-.142-.77q.085-.413.424-.66l2.116-1.568a3 3 0 0 1-.028-.372v-.742q0-.178.028-.37l-2.116-1.568a1.05 1.05 0 0 1-.424-.66 1 1 0 0 1 .142-.77l2.088-3.548a.89.89 0 0 1 .606-.482 1.4 1.4 0 0 1 .805.042l2.455.99q.31-.22.649-.412.338-.194.677-.33l.339-2.558q.056-.413.366-.687a1.07 1.07 0 0 1 .734-.275h4.233q.423 0 .733.275.311.275.367.687l.339 2.558q.366.136.692.33.324.192.634.412l2.455-.99q.395-.136.79-.027t.621.467l2.088 3.548q.226.357.141.77a1.05 1.05 0 0 1-.423.66l-2.116 1.567q.027.193.028.37v.743q0 .18-.057.372l2.117 1.568q.339.247.423.66.085.412-.141.77l-2.088 3.52q-.225.358-.635.481a1.27 1.27 0 0 1-.804-.014l-2.399-.99a8 8 0 0 1-.649.413 6 6 0 0 1-.677.33l-.339 2.557q-.056.412-.367.688a1.07 1.07 0 0 1-.733.275Z"
      />
      <circle
        cx={20.324}
        cy={20.585}
        r={3.348}
        stroke="currentColor"
        strokeWidth={2}
      />
    </>
  ),
  share: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M20.69 22.016V10.74m0 0-4.643 4.643m4.643-4.643 4.643 4.643m3.648 4.975v4.643a2.653 2.653 0 0 1-2.653 2.653H15.052a2.653 2.653 0 0 1-2.653-2.653v-4.643"
    />
  ),
  shuffle: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M10.103 12.627c1.58 0 3.056.783 3.943 2.09l.835 1.233 1.127 1.662m12.741 8.308h-4.925a5.05 5.05 0 0 1-3.532-1.44l-.929-.908m9.386 2.348-3.492 3.545m3.492-3.545-3.492-3.545M10.103 27.95c1.583 0 3.068-.77 3.98-2.065l6.172-8.766a5.05 5.05 0 0 1 4.13-2.143h4.364m0 0-3.492-3.544m3.492 3.544-3.492 3.545"
    />
  ),
  skip: (
    <>
      <path
        fill="currentColor"
        d="M20.724 18.715a1.53 1.53 0 0 1 0 2.576l-7 4.49c-1.019.654-2.357-.077-2.357-1.288v-8.98c0-1.21 1.338-1.943 2.357-1.289z"
      />
      <path
        fill="currentColor"
        d="M30.724 18.715a1.53 1.53 0 0 1 0 2.576l-7 4.49c-1.019.654-2.357-.077-2.357-1.288v-8.98c0-1.21 1.338-1.943 2.357-1.289z"
      />
    </>
  ),
  sort: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.021}
      d="M26.978 26.805V13.53m0 0-4.643 4.643m4.643-4.643 4.643 4.643M13.978 13.805v13.276m0 0 4.643-4.643m-4.643 4.643-4.643-4.643"
    />
  ),
  "timer-filled": (
    <>
      <circle
        cx={19.827}
        cy={21.336}
        r={10.1}
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M19.827 14.336v5M23.827 8.336h-8"
      />
    </>
  ),
  up: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.357}
      d="m25.257 21.89-5.052-5.052-5.051 5.051"
    />
  ),
  upvote: (
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M11.335 27.423v-7.988c0-.875.71-1.584 1.584-1.584h1.632c.565 0 1.086-.3 1.37-.788l2.992-5.148c.813-1.4 2.953-.822 2.953.796v3.556c0 .875.709 1.584 1.584 1.584h2.122a3.168 3.168 0 0 1 3.087 3.877l-1.106 4.82a3.17 3.17 0 0 1-3.088 2.459H12.92c-.875 0-1.584-.71-1.584-1.584Z"
    />
  ),
  video: (
    <>
      <rect
        width={21}
        height={17}
        stroke="#1ED760"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={4}
        transform="matrix(1 0 0 -1 9.832 29.08)"
      />
      <path
        fill="#1ED760"
        d="M17.832 17.89v5.382a.5.5 0 0 0 .724.447l5.382-2.691a.5.5 0 0 0 0-.894l-5.382-2.692a.5.5 0 0 0-.724.448"
      />
    </>
  ),
  volume: (
    <>
      <g stroke="currentColor" clipPath="url(#Volume_svg__a)">
        <path
          strokeWidth={2.021}
          d="M12.856 23.82c-2.979-1.489-2.979-5.739 0-7.228l8.732-4.366a.673.673 0 0 1 .975.601v14.757c0 .5-.527.826-.975.602z"
        />
        <path
          strokeLinecap="round"
          strokeWidth={1.684}
          d="M26.94 25.258c.79-.215 1.519-.693 2.1-1.388.812-.972 1.268-2.29 1.268-3.664s-.456-2.691-1.268-3.663c-.581-.695-1.31-1.173-2.1-1.388"
        />
        <path
          fill="currentColor"
          strokeWidth={0.842}
          d="M26.099 19.696c0-.183.153-.337.322-.267a.843.843 0 0 1 0 1.556c-.169.07-.322-.084-.322-.267v-1.022Z"
        />
      </g>
      <defs>
        <clipPath id="Volume_svg__a">
          <path fill="#fff" d="M8.419 8.42h23.573v23.573H8.419z" />
        </clipPath>
      </defs>
    </>
  ),

  // ---- dynamic icons (default / active) ----
  check: {
    default: (
      <circle
        cx={20.584}
        cy={20.081}
        r={10.1}
        stroke="currentColor"
        strokeWidth={1.8}
      />
    ),
    active: (
      <>
        <circle cx={20.584} cy={20.081} r={11} fill="#1ED760" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m16.335 20.58 3 3 5.5-5.5"
        />
      </>
    ),
  },
  discover: {
    default: (
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M20.59 10.823a13 13 0 0 0 9.002 9.002l1.795.504-1.795.504a13 13 0 0 0-9.002 9.002l-.504 1.795-.503-1.795a13 13 0 0 0-9.002-9.002l-1.795-.504 1.795-.504a13 13 0 0 0 9.002-9.002l.503-1.795z"
      />
    ),
    active: (
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        d="M20.59 10.823a13 13 0 0 0 9.002 9.002l1.795.504-1.795.504a13 13 0 0 0-9.002 9.002l-.504 1.795-.503-1.795a13 13 0 0 0-9.002-9.002l-1.795-.504 1.795-.504a13 13 0 0 0 9.002-9.002l.503-1.795z"
      />
    ),
  },
  friends: {
    default: (
      <>
        <path
          stroke="currentColor"
          strokeWidth={2.021}
          d="M29.4 14.313a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="m19.113 23.417.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H19.185a1.57 1.57 0 0 1-1.572-1.572V26.22c0-1.126.563-2.178 1.5-2.802"
        />
        <path
          stroke="currentColor"
          strokeWidth={2.021}
          d="M17.981 14.313a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="M14.614 21.049c-2.196 0-4.343.65-6.17 1.868l-.75.5a3.37 3.37 0 0 0-1.5 2.802v1.677c0 .868.704 1.572 1.572 1.572h6.061"
        />
      </>
    ),
    active: (
      <>
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2.021}
          d="M29.4 14.313a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="m19.113 23.417.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H19.185a1.57 1.57 0 0 1-1.572-1.572V26.22c0-1.126.563-2.178 1.5-2.802"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2.021}
          d="M17.981 14.313a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="m7.913 23.45.397-.222a12.87 12.87 0 0 1 6.304-1.65s-.646 2.21-.787 4c-.053.67-.059 1.51-.05 2.238.013.899-.704 1.652-1.602 1.652H7.766a1.57 1.57 0 0 1-1.571-1.572v-1.51c0-1.216.656-2.339 1.718-2.935"
        />
      </>
    ),
  },
  home: {
    default: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M25.257 28.625h3.367c.93 0 1.684-.754 1.684-1.684v-7.508c0-.495-.218-.966-.596-1.285l-8.419-7.124a1.684 1.684 0 0 0-2.175 0l-8.42 7.124c-.377.32-.595.79-.595 1.285v7.508c0 .93.754 1.684 1.683 1.684h3.368"
      />
    ),
    active: (
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M10.103 19.433v7.508c0 .93.754 1.684 1.684 1.684h3.367a.99.99 0 0 0 1.041-.99v-4.907c0-.926.747-1.678 1.673-1.684l4.787-.03a1.684 1.684 0 0 1 1.695 1.683v5.022c0 .5.406.906.907.906h3.367c.93 0 1.684-.754 1.684-1.684v-7.508c0-.495-.218-.966-.596-1.285l-8.419-7.124a1.684 1.684 0 0 0-2.175 0l-8.42 7.124c-.377.32-.595.79-.595 1.285"
      />
    ),
  },
  library: {
    default: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M11.562 11.563v17.286M17.324 11.563v17.286M23.087 28.85V11.562l5.762 3.989v13.297z"
      />
    ),
    active: (
      <>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="M11.562 11.563v17.286M17.324 11.563v17.286"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="M23.087 28.85V11.562l5.762 3.989v13.297z"
        />
      </>
    ),
  },
  like: {
    default: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m22.07 13.569-1.865 1.805-1.863-1.806a4.807 4.807 0 0 0-6.914.231c-1.77 1.96-2.013 4.895-.41 6.994.196.258.39.505.574.731 1.167 1.43 3.712 3.93 4.987 5.27.942.992 1.789 1.818 2.427 2.42a1.736 1.736 0 0 0 2.388-.013c1.177-1.105 2.98-2.827 4.251-4.163 1.275-1.341 2.007-2.083 3.174-3.514.184-.226.378-.473.574-.731 1.603-2.099 1.36-5.034-.41-6.994a4.81 4.81 0 0 0-6.914-.23"
      />
    ),
    active: (
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m22.07 13.569-1.865 1.805-1.863-1.806a4.81 4.81 0 0 0-6.914.231c-1.77 1.96-2.013 4.895-.41 6.994.196.258.39.505.574.731 1.167 1.43 3.712 3.93 4.987 5.27.942.992 1.789 1.818 2.427 2.42a1.736 1.736 0 0 0 2.388-.013c1.177-1.105 2.98-2.827 4.251-4.163 1.276-1.341 2.007-2.083 3.174-3.514.184-.226.378-.473.574-.731 1.603-2.099 1.36-5.034-.41-6.994a4.81 4.81 0 0 0-6.914-.23"
      />
    ),
  },
  notes: {
    default: (
      <>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M14.493 15.553h10.724M14.493 20.77h7.149"
        />
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M9.578 23.814v-10.87a2.61 2.61 0 0 1 2.61-2.608H27.97a2.61 2.61 0 0 1 2.608 2.609v10.87a2.61 2.61 0 0 1-2.608 2.608h-3.286c-.793 0-1.543.36-2.038.98l-.986 1.233a1.74 1.74 0 0 1-2.717 0l-.986-1.233a2.6 2.6 0 0 0-2.037-.98h-3.733a2.61 2.61 0 0 1-2.609-2.609Z"
        />
      </>
    ),
    active: (
      <>
        <path
          stroke="#1ED760"
          strokeLinecap="round"
          strokeWidth={2}
          d="M14.493 15.553h10.724M14.493 20.77h7.149"
        />
        <path
          stroke="#1ED760"
          strokeWidth={2}
          d="M9.578 23.814v-10.87a2.61 2.61 0 0 1 2.61-2.608H27.97a2.61 2.61 0 0 1 2.608 2.609v10.87a2.61 2.61 0 0 1-2.608 2.608h-3.286c-.793 0-1.543.36-2.038.98l-.986 1.233a1.74 1.74 0 0 1-2.717 0l-.986-1.233a2.6 2.6 0 0 0-2.037-.98h-3.733a2.61 2.61 0 0 1-2.609-2.609Z"
        />
        <circle cx={20.827} cy={35.336} r={2} fill="#1ED760" />
      </>
    ),
  },
  pin: {
    default: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m29.32 16.426 1.519 1.518m-1.518-1.518-6.7 6.7a.78.78 0 0 0-.223.457l-.335 2.753a.779.779 0 0 1-1.323.457l-3.929-3.929m12.51-6.438-6.071-6.072m-1.518-1.517 1.518 1.517m0 0-6.7 6.7a.78.78 0 0 1-.457.223l-2.754.335a.779.779 0 0 0-.457 1.324l3.929 3.928m0 0-5.168 5.168"
      />
    ),
    active: (
      <path
        stroke="#1ED760"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m29.32 16.426 1.519 1.518m-1.518-1.518-6.7 6.7a.78.78 0 0 0-.223.457l-.335 2.753a.779.779 0 0 1-1.323.457l-3.929-3.929m12.51-6.438-6.071-6.072m-1.518-1.517 1.518 1.517m0 0-6.7 6.7a.78.78 0 0 1-.457.223l-2.754.335a.779.779 0 0 0-.457 1.324l3.929 3.928m0 0-5.168 5.168"
      />
    ),
  },
  play: {
    default: (
      <>
        <circle
          className="fill-[#65D46E] group-hover:fill-[#1ED760]"
          cx={20.205}
          cy={20.205}
          r={20.205}
          fill="#1ED760"
        />
        <path
          fill="currentColor"
          d="M26.328 18.88a1.53 1.53 0 0 1 0 2.652l-8.036 4.64a1.53 1.53 0 0 1-2.296-1.326v-9.28a1.53 1.53 0 0 1 2.296-1.325z"
        />
      </>
    ),
    active: (
      <>
        <circle
          className="fill-[#65D46E] group-hover:fill-[#1ED760]"
          cx={20.205}
          cy={20.205}
          r={20.205}
          fill="currentColor"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={3.368}
          d="M16.838 15.154v10.103M23.573 15.154v10.103"
        />
      </>
    ),
  },
  private: {
    default: (
      <>
        <path
          fill="currentColor"
          d="M24.734 12.464a.887.887 0 1 0 1.606-.756zm-10.93 3.722c.877-.142.877-.141.877-.14l-.001-.008-.006-.044-.02-.191a7 7 0 0 1-.028-.718c.006-.605.083-1.388.352-2.154.267-.76.715-1.48 1.455-2.017.737-.535 1.841-.94 3.518-.94V8.198c-1.972 0-3.461.482-4.56 1.279-1.097.795-1.73 1.849-2.087 2.865-.355 1.009-.446 2-.453 2.727a9 9 0 0 0 .062 1.15l.01.075.004.023v.007l.001.003c0 .001 0 .002.877-.14m6.147-6.212c1.505 0 2.547.326 3.275.777a3.93 3.93 0 0 1 1.508 1.713l1.606-.756a5.7 5.7 0 0 0-2.18-2.467c-1.062-.657-2.442-1.043-4.209-1.043z"
        />
        <path
          stroke="currentColor"
          strokeWidth={1.775}
          d="M26.164 16.63H13.738a2.663 2.663 0 0 0-2.662 2.664v9.32a2.663 2.663 0 0 0 2.662 2.662h12.426a2.663 2.663 0 0 0 2.663-2.663v-9.32a2.663 2.663 0 0 0-2.663-2.662Z"
        />
        <circle
          cx={19.951}
          cy={24.174}
          r={2.663}
          stroke="currentColor"
          strokeWidth={1.775}
        />
      </>
    ),
    active: (
      <>
        <path
          stroke="#1ED760"
          strokeWidth={1.775}
          d="M13.805 16.186s-1.153-7.1 6.146-7.1c7.3 0 6.147 7.1 6.147 7.1M26.164 16.63H13.738a2.663 2.663 0 0 0-2.662 2.664v9.32a2.663 2.663 0 0 0 2.662 2.662h12.426a2.663 2.663 0 0 0 2.663-2.663v-9.32a2.663 2.663 0 0 0-2.663-2.662Z"
        />
        <circle
          cx={19.951}
          cy={24.174}
          r={2.663}
          stroke="#1ED760"
          strokeWidth={1.775}
        />
      </>
    ),
  },
  save: {
    default: (
      <path
        stroke="currentColor"
        strokeWidth={2.32}
        d="M12.324 12.402v16.304a1.16 1.16 0 0 0 1.834.943l4.937-3.526a2.32 2.32 0 0 1 2.697 0l4.936 3.526a1.16 1.16 0 0 0 1.834-.944V12.403a2.32 2.32 0 0 0-2.32-2.32H14.645a2.32 2.32 0 0 0-2.32 2.32Z"
      />
    ),
    active: (
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2.32}
        d="M12.076 12.402v16.304a1.16 1.16 0 0 0 1.834.943l4.936-3.526a2.32 2.32 0 0 1 2.697 0l4.937 3.526a1.16 1.16 0 0 0 1.834-.944V12.403a2.32 2.32 0 0 0-2.32-2.32H14.395a2.32 2.32 0 0 0-2.32 2.32Z"
      />
    ),
  },
  search: {
    default: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.021}
        d="M24.736 24.36a8.696 8.696 0 1 0-12.42-12.174 8.696 8.696 0 0 0 12.42 12.175Zm0 0 5.094 5.218"
      />
    ),
    active: (
      <>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2.021}
          d="M24.738 24.36a8.696 8.696 0 1 0-12.42-12.174 8.696 8.696 0 0 0 12.42 12.175Zm0 0 5.094 5.218"
        />
        <circle cx={18.532} cy={18.278} r={5.7} fill="currentColor" />
      </>
    ),
  },
  show: {
    default: (
      <>
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M20.302 12.222c4.386.03 7.966 3.15 10.043 5.5 1.309 1.48 1.287 3.638-.074 5.07-2.062 2.17-5.553 4.958-9.863 4.928-4.331-.03-7.875-2.894-9.962-5.096a3.71 3.71 0 0 1-.087-5.069c2.05-2.318 5.576-5.362 9.943-5.333Z"
        />
        <circle cx={20.38} cy={19.936} r={4.252} fill="currentColor" />
      </>
    ),
    active: (
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M20.403 27.003c-1.963-.014-3.759-.632-5.32-1.504m5.32 1.504v3.082m0-3.082c2.019.014 3.852-.614 5.43-1.504m6.035-5.654s-.646.993-1.804 2.24M8.84 19.687s.705 1.073 1.959 2.398m0 0L8.084 24.8m2.715-2.715c1.065 1.124 2.525 2.43 4.285 3.414m0 0-2 3.086m12.749-3.086 1.75 3.086m-1.75-3.086c1.756-.99 3.198-2.303 4.23-3.414m0 0 2.52 2.52"
      />
    ),
  },
  "synced-lyrics": {
    default: (
      <>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M11.08 12.826h4.656M11.08 19.049h4.656"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.97 10.826a9.11 9.11 0 1 1 0 18.221s-5.334 0-8.001-4.442"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21.175 14.383v5.555l4.684 2.89"
        />
      </>
    ),
    active: (
      <>
        <path
          stroke="#1ED760"
          strokeLinecap="round"
          strokeWidth={2}
          d="M11.076 12.826h4.656M11.076 19.049h4.656"
        />
        <path
          stroke="#1ED760"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.965 10.826a9.11 9.11 0 1 1 0 18.221s-5.333 0-8-4.442"
        />
        <path
          stroke="#1ED760"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21.171 14.383v5.555l4.683 2.89"
        />
        <circle cx={20.076} cy={35.826} r={2} fill="#1ED760" />
      </>
    ),
  },
  translate: {
    default: (
      <path
        fill="currentColor"
        d="M21.928 30.334q-.6 0-.862-.387-.263-.389-.063-.963l3.65-9.675q.15-.4.563-.688t.862-.287q.426 0 .85.287.425.288.575.688l3.65 9.675q.2.575-.062.963-.263.387-.888.387a.8.8 0 0 1-.5-.175 1 1 0 0 1-.325-.425l-.85-2.45h-4.85l-.875 2.45a.95.95 0 0 1-.35.425.9.9 0 0 1-.525.175m2.35-4.8h3.6l-1.75-4.95h-.1zm-8.55-8.65q.4.725.85 1.337.45.613 1.05 1.263 1.1-1.2 1.825-2.462.726-1.263 1.225-2.688h-10.1a.97.97 0 0 1-.712-.287.97.97 0 0 1-.288-.713q0-.425.288-.713a.97.97 0 0 1 .712-.287h6v-1q0-.425.288-.713a.97.97 0 0 1 .712-.287.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713v1h6q.426 0 .712.287.288.288.288.713a.97.97 0 0 1-.288.713.97.97 0 0 1-.712.287h-1.9a18 18 0 0 1-1.425 3.45 16 16 0 0 1-2.225 3.15l2.4 2.45-.75 2.05-3.1-3.1-4.3 4.3a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.35-4.35a23 23 0 0 1-1.25-1.563 12.5 12.5 0 0 1-1.025-1.662q-.274-.525-.025-.925t.875-.4q.25 0 .525.162.276.163.4.388"
      />
    ),
    active: (
      <>
        <path
          fill="#1ED760"
          d="M21.928 30.334q-.6 0-.862-.387-.263-.389-.063-.963l3.65-9.675q.15-.4.563-.688t.862-.287q.426 0 .85.287.425.288.575.688l3.65 9.675q.2.575-.062.963-.262.387-.888.387a.8.8 0 0 1-.5-.175 1 1 0 0 1-.325-.425l-.85-2.45h-4.85l-.875 2.45a.95.95 0 0 1-.35.425.9.9 0 0 1-.525.175m2.35-4.8h3.6l-1.75-4.95h-.1zm-8.55-8.65q.4.725.85 1.337.45.613 1.05 1.263 1.1-1.2 1.825-2.462.726-1.263 1.225-2.688h-10.1a.97.97 0 0 1-.712-.287.97.97 0 0 1-.288-.713q0-.425.288-.713a.97.97 0 0 1 .712-.287h6v-1q0-.425.288-.713a.97.97 0 0 1 .712-.287.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713v1h6q.426 0 .712.287.288.288.288.713a.97.97 0 0 1-.288.713.97.97 0 0 1-.712.287h-1.9a18 18 0 0 1-1.425 3.45 16 16 0 0 1-2.225 3.15l2.4 2.45-.75 2.05-3.1-3.1-4.3 4.3a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.35-4.35a23 23 0 0 1-1.25-1.563 12.5 12.5 0 0 1-1.025-1.662q-.274-.525-.025-.925t.875-.4q.25 0 .525.162.276.163.4.388"
        />
        <circle cx={20.33} cy={35.336} r={2} fill="#1ED760" />
      </>
    ),
  },
  user: {
    default: (
      <>
        <path
          stroke="currentColor"
          strokeWidth={2.021}
          d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="m13.286 22.573.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H13.358a1.57 1.57 0 0 1-1.572-1.572v-1.677c0-1.126.563-2.177 1.5-2.802"
        />
      </>
    ),
    active: (
      <>
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2.021}
          d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.021}
          d="m13.286 22.573.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H13.358a1.57 1.57 0 0 1-1.572-1.572v-1.677c0-1.126.563-2.177 1.5-2.802"
        />
      </>
    ),
  },
} satisfies IconType;

export type IconName = keyof typeof IconMap;

type DynamicIconShape = { active: ReactNode; default: ReactNode };
type PerKeyCheck = {
  [K in IconName]: (typeof IconMap)[K] extends DynamicIconShape ? K : never;
};

export type DynamicIconName = PerKeyCheck[IconName];
export type StaticIconName = Exclude<IconName, DynamicIconName>;
