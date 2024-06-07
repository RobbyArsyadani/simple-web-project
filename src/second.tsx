import Layout from "./components/layout";

type IComment = {
  commentId: number;
  commentContent: string;

  replies?: IComment[];
};
const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

function countAllComments(comments: IComment[]): { count: number; contents: string[] } {
  let count = 0;
  let contents: string[] = [];
  for (const comment of comments) {
    count += 1; // Hitung komentar ini
    contents.push(comment.commentContent);
    if (comment.replies) {
      const replyComment = countAllComments(comment.replies);
      count += replyComment.count;
      contents = contents.concat(replyComment.contents);
      // Hitung semua replies
    }
  }
  return { count, contents };
}

const totalComments = countAllComments(comments);

export default function Second() {
  return (
    <>
      <Layout>
        <div className="d-grid gap-3 mt-3 px-2">
          <div className="j p-3 rounded" style={{ backgroundColor: "#80B9AD" }}>
            <p>Chat:</p>
            {totalComments.contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
          <div>
            <p>Jumlah chat: {totalComments.count}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
