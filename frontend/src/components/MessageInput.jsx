import { useRef, useState, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Smile, File } from "lucide-react";
import toast from "react-hot-toast";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showFilePicker, setShowFilePicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const filePickerRef = useRef(null);
  const { sendMessage } = useChatStore();

  // Close emoji/file picker on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(e.target) &&
        e.target.id !== "emoji-button"
      ) {
        setShowEmojiPicker(false);
      }
      if (
        filePickerRef.current &&
        !filePickerRef.current.contains(e.target) &&
        e.target.id !== "file-button"
      ) {
        setShowFilePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      toast.success(`${file.name} selected`);
    }
    setShowFilePicker(false);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview && !selectedFile) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
        file: selectedFile,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const addEmoji = (emoji) => {
    setText((prevText) => prevText + emoji.native);
  };

  return (
    <div className="p-4 w-full relative border-base-300">
      {/* Image Preview */}
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      {/* Selected File */}
      {selectedFile && (
        <div className="mb-3 flex items-center gap-2 text-sm">
          <span className="text-emerald-500">{selectedFile.name}</span>
          <button
            onClick={() => setSelectedFile(null)}
            className="text-red-500 text-xs"
          >
            Remove
          </button>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-3">
          {/* Text Input */}
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* File Input */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          {/* Image Button */}
          <button
            type="button"
            className={`btn btn-circle ${
              imagePreview ? "text-emerald-500" : "text-zinc-400"
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>

          {/* File Picker Button */}
          <button
            id="file-button"
            type="button"
            className="btn btn-circle text-zinc-400"
            onClick={() => setShowFilePicker((prev) => !prev)}
          >
            <File size={20} />
          </button>

          {/* Emoji Picker Button */}
          <button
            id="emoji-button"
            type="button"
            className="btn btn-circle text-zinc-400"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            <Smile size={20} />
          </button>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="btn btn-md btn-circle items-center"
          disabled={!text.trim() && !imagePreview && !selectedFile}
        >
          <Send size={20} />
        </button>
      </form>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div ref={emojiPickerRef} className="absolute bottom-16 left-4 z-50">
          <Picker data={data} onEmojiSelect={addEmoji} />
        </div>
      )}

      {/* File Picker */}
      {showFilePicker && (
        <div
          ref={filePickerRef}
          className="absolute bottom-16 left-20 z-50 bg-white border p-2 rounded-lg shadow-md"
        >
          <label className="cursor-pointer text-sm text-zinc-600 hover:text-emerald-500">
            <input type="file" className="hidden" onChange={handleFileChange} />
            Upload a File
          </label>
        </div>
      )}
    </div>
  );
};

export default MessageInput;
