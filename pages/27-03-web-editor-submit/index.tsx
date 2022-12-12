import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// reacthookform을 사용하겠습니다.
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };

  const [createBoard] = useMutation(CREATE_BOARD);

  const onclickSubmit = async (data: any) => {
    // data가 모두 있을 때 mutation을 날리겠습니다.
    // if(data.writer && data.password && data.title && data.contents)

    // 모두 없을때!!!
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해 주세요!");
      return;
    }
    // mutation
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      // console.log(result);
      router.push(`../27-04-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error: any) {
      // Modal.error({ content: error.message });
      alert(error.message);
    }
  };

  return (
    // reacthookform을 사용하고 있기 때문에 handleSubmit을 사용해서 감싸줍니다.
    <form onSubmit={handleSubmit(onclickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill theme="snow" onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
