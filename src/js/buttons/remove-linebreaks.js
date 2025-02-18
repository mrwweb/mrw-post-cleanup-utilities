import EditorFindReplaceButton from "../compontents/editor-find-replace-button";

export default function RemoveLinebreaksButton() {
    function removeLinebreaks( postContent ) {
        return postContent
            .replace(/<br>/gi, ' ')
            .replace(/<br \/>/gi, ' ');
    }

    return (
        <EditorFindReplaceButton
            buttonText={'Remove Linebreaks'}
            buttonIcon={'editor-break'}
            transformFunction={removeLinebreaks}
            />
    );
}
