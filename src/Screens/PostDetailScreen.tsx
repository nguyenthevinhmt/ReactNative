import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPostById } from "../Services/postService";

const PostDetailScreen = ({ route, navigation }: any) => {
  const [post, setPost] = useState<any>({});
  const postId = route.params.postId;
  useEffect(() => {
    // Gọi API để lấy thông tin bài viết dựa trên postId
    const getData = async () => {
      try {
        const res = await getPostById(postId).then((res) => {
          setPost(res.data);
        });
        return res;
      } catch (err) {
        throw err;
      }
    };
    getData();
  }, [route.params.postId]);

  if (!post) {
    // Hiển thị thông báo hoặc spinner nếu dữ liệu chưa được tải
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postContent}>{post.content}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postContent: {
    marginTop: 8,
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PostDetailScreen;
