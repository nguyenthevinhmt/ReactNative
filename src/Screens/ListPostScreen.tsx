import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PostItem } from "../Components/PostItem";
import { getAllPost } from "../Services/postService";
const ListPostScreen = ({ navigation, route }: any) => {
  const [posts, setPosts] = useState<any>([]);
  const [searchBox, setSearchBox] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPost().then((response) => {
          setPosts(response.data);
        });
        return response;
      } catch (err) {
        throw err;
      }
    };
    getData();
  }, [route.params]);
  const navigateToDetail = (postId: any) => {
    // Điều hướng sang màn hình chi tiết và truyền ID của bài viết
    navigation.navigate("Detail", { postId });
  };
  const filteredPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchBox.toLowerCase())
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.leftItem}></View>
          <Text style={styles.headerTitle}>Danh sách bài viết</Text>
          <TouchableOpacity
            style={styles.rightItem}
            onPress={() => {
              navigation.navigate("Add");
            }}
          >
            <View style={styles.AddButton}>
              <Text style={styles.headerTitle}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              borderWidth: 1,
              padding: 8,
              borderColor: "#ccc",
              borderRadius: 5,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              value={searchBox}
              onChangeText={(value) => {
                setSearchBox(value);
              }}
              placeholder="Nhập tiêu đề bài viết"
            />
            {searchBox !== "" ? (
              <TouchableOpacity
                onPress={() => {
                  setSearchBox("");
                }}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#F70505",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: "#fff" }}>X</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Button
              title="Search"
              onPress={() => {
                if (filteredPosts != null) setPosts(filteredPosts);
                else {
                  setPosts([]);
                }
              }}
            ></Button>
          </View>
        </View>
        <ScrollView>
          {posts.map((post: any) => (
            <TouchableOpacity
              onPress={() => navigateToDetail(post.id)}
              key={post.id}
            >
              <PostItem
                title={post.title}
                content={post.content}
                createdAt={post.createdAt}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftItem: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 2.5,
  },
  AddButton: {
    paddingVertical: 10,
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#ccc",
    right: 0,
  },
  rightItem: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default ListPostScreen;
