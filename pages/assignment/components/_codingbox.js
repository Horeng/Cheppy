import Editor from "@monaco-editor/react";
import { useRef } from "react";

import styles from "../../../styles/assignment/_codingbox.module.css"


export default function CodingBox({ assignment, onClickCheckPoint }) {
    const editorRef = useRef(null)

    const baseCode = assignment?.reference_code
    console.log(assignment);
    console.log(baseCode);
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor
    }

    function handleEditorValidation(markers) {
        markers.forEach(marker => console.log("onValidate:", marker.message))
    }


    function checkPoint(action) {
        if (editorRef.current === null) return
        const code = editorRef.current.getValue()
        onClickCheckPoint(code, action)
    }

    return (
        <div className={styles.codingbox}>
            <div className={styles.border}>
                <Editor
                    language="python"
                    onValidate={handleEditorValidation}
                    onMount={handleEditorDidMount}
                    value={baseCode} />
            </div>
            <div className={styles.buttons}>
                <div>
                    <button type="button" class="btn btn-primary" onClick={() => checkPoint('run')}>실행</button>
                    <button style={{marginLeft: "5px"}} type="button" class="btn btn-primary" onClick={() => checkPoint('test')}>채점</button>
                </div>
                <div>
                    <button type="button" class="btn btn-danger" onClick={() => checkPoint('submit')}>제출</button>
                </div>
            </div>
        </div>
    )
}