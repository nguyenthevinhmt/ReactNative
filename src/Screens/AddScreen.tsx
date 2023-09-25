import { createNavigatorFactory } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNewPost } from "../Services/postService";

const AddPostScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPost = () => {
    if (!title || !content) {
      // Hiển thị thông báo nếu tiêu đề hoặc nội dung bài viết rỗng
      Alert.alert("Lỗi", "Tiêu đề và nội dung không được để trống");
    } else {
      // Thực hiện xử lý thêm bài viết vào cơ sở dữ liệu ở đây (chưa được triển khai)
      // Sau khi thêm thành công, bạn có thể điều hướng đến màn hình danh sách bài viết hoặc làm gì đó khác.
      const createFunc = async () => {
        try {
          var post = {
            title: title,
            content: content,
            createAt: Date.now(),
            imageUrl:
              "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/JEtA5GKG9IF.png",
          };
          await createNewPost(post);
        } catch (err) {
          throw err;
        }
      };
      createFunc();
      Alert.alert("Thành công", "Bài viết đã được thêm!");
      navigation.navigate("List", { refresh: true });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text> Back </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Tiêu đề:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Nội dung:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Thêm Bài Viết" onPress={handleAddPost} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default AddPostScreen;
