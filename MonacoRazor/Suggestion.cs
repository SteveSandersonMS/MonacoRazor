namespace MonacoRazor
{
    public class Suggestion
    {
        public string Label { get; set; }
        public string InsertText { get; set; }
        public CompletionItemKind Kind { get; set; }
        public string Documentation { get; set; }
    }
}
