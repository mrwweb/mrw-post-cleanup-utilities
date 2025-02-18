import EditorFindReplaceButton from "../compontents/editor-find-replace-button";

export default function RemoveNBSPsButton() {
    function removeNBSPs( postContent ) {
        return postContent
            .replace(/&nbsp;/gi, ' ');
    }

    return (
        <EditorFindReplaceButton
            buttonText={'Remove Non-breaking Spaces'}
            buttonIcon={'button'}
            transformFunction={removeNBSPs}
            />
    );
}
